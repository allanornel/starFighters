import axios from 'axios';
export async function battleService(firstUser: string, secondUser: string){
    const verifFirstUser = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
    const verifSecondUser = await axios.get(`https://api.github.com/users/${secondUser}/repos`);
    if(verifFirstUser.message || verifSecondUser.message){
        throw {type: 'Not Found', message: 'Usuários não foram encontrados'};
    }
}