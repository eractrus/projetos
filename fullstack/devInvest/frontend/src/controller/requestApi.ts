import axios from "axios";

export async function getActive(){
    const result = await axios.get('http://localhost:3003/active');
    return result.data
}

export async function updateActive(){
  const result = await axios.get('http://localhost:3003/active/update');

  return result
}