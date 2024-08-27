//Configuration work like this.

const conf = {

    //Export All Variable
    //Production Grade Approch me String Value rakhni hoti he.
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), //String Value aaegi

    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID)

}

export default conf