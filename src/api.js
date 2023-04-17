import axios from 'axios'

export default {
    getData: () => axios ({
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {countryIds: 'IN', namePrefix: 'del', limit: '3'},
        headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
        }
    })
  };