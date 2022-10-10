import { ICreateShowInputDTO, IGetShowsInputDTO, Show } from "../src/models/Show"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock"


describe("Testando a ShowtBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetShowsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await showBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Show)
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-mock-normal",
            band: "Teste do mock"
            
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Show)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })
})