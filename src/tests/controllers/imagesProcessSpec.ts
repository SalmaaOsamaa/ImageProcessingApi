// @ts-nocheck

import app from "../../app" //server file 
import supertest from "supertest";


const req = supertest(app);


describe('image processing resize controller and middleware', () => {
    it('it should return error when one of the params is missing', async (): Promise<void> => {
        const res = await req.get("/api/images");
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("Error: Parameter(s) missing..");
    });

    it('should return an error message if width is not a number', async (): Promise<void> => {
        const res = await req.get(`/api/images?filename=${filename}&height=${height}&width=${width}`);
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("height and width should be numbers");
    });

    it('it should return an error when height ismissing ', async (): Promise<void> => {
        const fileName = "image";
        const height = "hello";
        const width = 300;
        const res = await req.get(`/api/images?filename=${fileName}&height=${height}&width=${width}`);
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("height and width should be a number");        
    });
    
});   

function expect(statusCode: any) {
    throw new Error("Function not implemented.");
}

function done() {
    throw new Error("Function not implemented.");
}

