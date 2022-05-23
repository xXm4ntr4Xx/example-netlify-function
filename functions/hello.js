// functions/hello.js
export async function handler(event) {
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:`connected to hello function`,
      data:{
        name:'Pietro'
      }
    }),
  }
}
