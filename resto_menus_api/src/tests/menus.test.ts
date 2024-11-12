import request from 'supertest'
import express from 'express'
import router from '../routes/menus'
import { getMenus } from '../controllers/menus'

jest.mock('../controllers/menus')

const app = express()
app.use(express.json())
app.use('/menus', router)

describe('GET /menus/:page/:limit', () => {
    it('should return menus with status 200', async () => {
        const mockMenus = [{ id: 1, name: 'Menu 1' }, { id: 2, name: 'Menu 2' }]
        ;(getMenus as jest.Mock).mockResolvedValue(mockMenus)

        const response = await request(app).get('/menus/1/10')

        expect(response.status).toBe(200)
        expect(response.body).toEqual(mockMenus)
    })

    it('should return status 500 if there is an error', async () => {
        ;(getMenus as jest.Mock).mockRejectedValue(new Error('Internal Server Error'))

        const response = await request(app).get('/menus/1/10')

        expect(response.status).toBe(500)
        expect(response.body).toEqual({ message: 'Internal Server Error' })
    })
})