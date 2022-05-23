// @ts-nocheck

import app from "../../app" //server file 
import supertest from "supertest";


const req = supertest(app);


describe('image processing resize controller and middleware', () => {
    it('it should return error when one of the params is missing', async (): Promise<void> => {
        const res = await req.get("/api/images");
        expect(res.statusCode).toBe(404);
    });

    it('should return an error message if width is not a number', async (): Promise<void> => {
        const filename = "image"
        const height = 100
        const width = 100
        const res = await req.get(`/api/images?filename=${filename}&height=${height}&width=${width}`);
        expect(res.statusCode).toBe(200);
    },20000);
});   


