import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
client = new Client();
databases;
bucket;

constructor()
{
    this.client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65705caa65a45cda7cb3");
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
}

async createPost ({ tittle, slug, content, featuredImage, status, userId, author})
{
    try {
        return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
                tittle,
                content,
                featuredImage,
                status,
                userId,
                author
            }


        )
    } catch (error) {
       console.log("Error in service post", error); 
    }
}

async updatePost(slug, {tittle, content, featuredImage, status, author})
{
try {
    return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          tittle,
          content,
          featuredImage,
          status,
          author
        }
    )
    
} catch (error) {
   console.log("Error in service post", error); 
}
}

async deletePost(slug)
{
try {
     return await this.databases.deleteDocument(
     config.appwriteDatabaseId,
     config.appwriteCollectionId,
     slug
    )
    return true;
    
} catch (error) {
   console.log("Error in service post", error); 
   return false;
}
}

async getPost(slug){

 try {
    return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug )
        return true;
    } catch (error) {
        console.log("Error in service post", error);
        return false;
    }
}

async getPosts( querries = [Query.equal("status", "active")])
{

    try {
       return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            querries )
            return true;
        } catch (error) {
            console.log("Error in service post", error);
            return false;
        }
    }

    // file upload method or service

    async uploadFile(file)
    {
        try {
            await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Error in service post", error);
            return false;  
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.log("Error in service post", error);
            return false;   
        }
    }

    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }

}


const service = new Service();

export default service

