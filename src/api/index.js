import axios from 'axios'

const URL ='https://coinranking1.p.rapidapi.com/coins'

const options = {
    headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
    }
  };
  
export const getCountries = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options)
        return data
    } catch (error) {
        console.log(error)
    }
}