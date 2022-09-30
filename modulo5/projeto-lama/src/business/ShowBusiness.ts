import { tickets } from "../database/migrations/data"
import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowsInputDTO, IGetShowsOutputDTO, Show } from "../models/Show"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, band, startsAt } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        if (typeof band !== "string") {
            throw new ParamsError("Parâmetro 'content' inválido")
        }

        if (band.length < 1) {
            throw new ParamsError("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }

        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            band,
            startsAt
        
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show
        }

        return response
    }

    public getShows = async (input: IGetShowsInputDTO) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at

            )
        })

        for (let show of shows) {
            const showId = show.getId()
            const likes = await this.showDatabase.getTickets(showId)
            show.setTickets(tickets)
        }

        const response: IGetShowsOutputDTO = {
            shows
        }

        return response
    }


}