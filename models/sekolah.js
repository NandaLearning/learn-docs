import { PrismaClient } from "@prisma/client"



const prisma = new PrismaClient()
export class SekolahModels {

    static async getAllSekolah(){
        try {
            const count = await prisma.sekolah.count()
            const data = await prisma.sekolah.findMany()
            if(!count && !data){
                return {
                    status : 404,
                    message : "data tidak ditemukan"
                }
            }
            return { count : count,data : data }
        } catch (error) {
            console.log(error)
        }
    }


    static async getSekolahById(id){
        try {
            const sekolah = await prisma.sekolah.findUnique({
                where : {
                    id : Number(id)
                }
            })
            if(!sekolah) return {
                status : 404,
                message : "id tidak dapat di temukan"
            }
            return { sekolah : sekolah }
        } catch (error) {
            console.log(error)
        }
    }


    static async createSekolah(nama_sekolah){
        try {
            if(!nama_sekolah || !nama_sekolah.trim()) return {
                status : 500,
                message : "input sekolah harus benar"
            }
            const cariNamaSekolah = await prisma.sekolah.findFirst({
                where : {
                    nama_sekolah : nama_sekolah
                }
            })
            if(cariNamaSekolah) return {
                status : 501,
                message : "sekolah sudah ada"
            }
            const sekolah = await prisma.sekolah.create({
                data : {
                    nama_sekolah : nama_sekolah
                }
            })
            return {
                sekolah : sekolah
            }
        } catch (error) {
            console.log(error)
        }
    }


    static async updateSekolahById(id,nama_sekolah){
        try {
            if(!nama_sekolah || !nama_sekolah.trim()) return {
                status : 500,
                message : "nama sekolah tidak boleh kosong"
            }
            const sekolah = await prisma.sekolah.update({
                where : {
                    id : Number(id)
                },
                data : {
                    nama_sekolah : nama_sekolah
                }
            })
            return {
                sekolah : sekolah
            }
        } catch (error) {
            console.log(error)
        }
    }


    static async deleteSekolahById(id){
        try {
            const cariNamaSekolah = await prisma.sekolah.findUnique({
                where : {
                    id : Number(id)
                }
            })
            if(!cariNamaSekolah) return {
                status : 404,
                message : "sekolah tidak ditemukan"
            }
            const sekolah = await prisma.sekolah.delete({
                where : {
                    id : Number(id)
                }
            })
            return { sekolah : sekolah }
        } catch (error) {
            console.log(error)
        }
    }



}