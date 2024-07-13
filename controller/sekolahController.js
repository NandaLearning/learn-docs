import { json, response } from "express";
import { SekolahModels } from "../models/sekolah.js";
import { status200, status500 } from "../utils/status.js";



export class sekolahController {

    static async getAllSekolah(req,res){
        try {
            const data = await SekolahModels.getAllSekolah()
            if(!data) return res.status(404).json(data)
                res.status(200).json({
                    response : status200,
                    data : data
                })
        } catch (error) {
            console.log(error)
            res.status(500).json(status500)
        }
    }


    static async getSekolahById(req,res){
        try {
            const { id } = req.params
            const data = await SekolahModels.getSekolahById(id)
            if(data.status == 404) return res.status(404).json(data)
            res.status(200).json({
                 response : status200,
                 data : data
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(status500)
        }
    }


    static async createSekolah(req,res){
        try {
            const { nama_sekolah } = req.body
            const data = await SekolahModels.createSekolah(nama_sekolah)
            if(data.status == 500) return res.status(500).json(data)
            else if(data.status == 501) return res.status(501).json(data)
                res.status(200).json({
                    response : status200,
                    data : data
                })
        } catch (error) {
            console.log(error)
            res.status(500).json(status500)
        }
    }


    static async updateSekolahById(req,res){
        try {
            const { id } = req.params
            const { nama_sekolah } = req.body
            const data = await SekolahModels.updateSekolahById(id,nama_sekolah)
            if(data.status == 500) return res.status(500).json(data)
                res.status(200).json({
                    response : status200,
                    data : data
                })
        } catch (error) {
            console.log(error)
            res.status(500).json(status500)
        }
    }


    static async deleteSekolahById(req,res){
        try {
            const { id } = req.params
            const data = await SekolahModels.deleteSekolahById(id)
            if(data.status == 404) return res.status(404).json(data)
            res.status(200).json({
                response : status200,
                data : data
            })
        } catch (error) {
            console.log(error)
            res.status(500).json(status500)
        }
    }


}