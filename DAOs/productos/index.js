let productoDAOs;

switch (process.env.DB_ENV) {
    
//---------1
case "json":
    const { default: ProductDAOsFileSystem } = await import(
      "./ProductDAOs_FileSystem.js"
    );
    productoDAOs = new ProductDAOsFileSystem("products");
    console.log("FileSystem as Database for Products");
    break;

//---------2
case "mongodb":
    const { default: ProductDAOsMongoDB } = await import(
      "./ProductDAOs_MongoDB.js"
    );
    productoDAOs = new ProductDAOsMongoDB();
    console.log(" MongoDB as Database for Products");
    break;

//-------------3
case "firebase":
    const { default: ProductDAOsFirebase } = await import(
      "./ProductDAOs_Firebase.js"
    );
    productoDAOs = new ProductDAOsFirebase();
    console.log("Firebase as Database for Products");
    break;
  
}

export { productoDAOs };