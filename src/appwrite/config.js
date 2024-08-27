import conf from "../conf/conf.js";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {

    client = new Client();
    databases;
    bucket; //(Storage)

    constructor()
    {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);

            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);

    }

    async createPost( { title, slug, content, featuredImage, status, userId } ) 
    {

        try
        {

            return await this.databases.createDocument(

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                //object, jitne attributes pass krne he lelo
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )

        }
        catch(error)
        {
            console.log("Appwrite service :: createPost :: error", error);
            
        }


    }

    //slug se hi unquely identify hoga, if unique.id hota to wo krte
    async updatePost(slug, {title, content, featuredImage, status}) 
    {

        try 
        {
        
            return await this.databases.updateDocument(

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )

        } catch (error) {
            
            console.log("Appwrite service :: updatePost :: error", error);

        }

    }

    //only slug id
    async deletePost(slug)
    {

        try {

            //yaha pe return krne ki zarurat nahi, sidha delete krke mssg dedo
            await this.databases.deleteDocument
            (

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            )
            //ye wala return hum front-end ke upr handle karege.
            //ki true aaya to kese handle karege, nahi aay a to kese handle karege.
            return true
            
        } catch (error) {

            console.log("Appwrite service :: deletePost :: error", error);
            return false
            
        }

    }

    //ab ho sakta he aapko ek particular post chahiye ho, ho sakta he saare chahiye ho, to uski id wo lagegi.
    //to slug ko pass krte hue ek 1 post kese le sakta hu.

    //getDocumet
    async getPost(slug)
    {

        try 
        {
            
            return await this.databases.getDocument
            (

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )

        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }

    }

    //Accha agar saare post chahiye ho to?
    //Actually mujhe saare documents nahi chahiye, bcz saare me mujhe wo bhi mil jaaege jiska status ACTIVE nahi he.
    //Ab wo sikhna padega ki Queries kese krte he.

    //List document, isme Query use krni hoti he.
    //koi parameter dene ki zarurat he ni bcz hum saare post lene wale he.

    async getPosts( queries = [ Query.equal("status", "active") ] )
    {

        try 
        {
            
            return await this.databases.listDocuments
            (

                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // hum chaaho to queries yaha bhi likh sakte the ese [ ]


            )

        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            
        }

    }

    //File upload Services
    //docs - storage upload and permissions

    async uploadFile(file)
    {
        try 
        {
            
            //yaha pe storage me hum upload kr rahe he file ko
            return await this.bucket.createFile
            (
                conf.appwriteBucketId,
                ID.unique(),
                file,//parametre passed in the method.
            )

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    //delte me hum file ki id laaege file create ke time pe se.
    async deleteFile(fileId)
    {
        try 
        {
            
            await this.bucket.deleteFile
            (
                conf.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    async getFilePreview(fileId)
    {
        //await karane kizaurat hi nahi , bcz iska kaam bhhtfast hota he.
        return this.bucket.getFilePreview
        (
            conf.appwriteBucketId,
            fileId
        )

    }

}