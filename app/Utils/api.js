const BASE_URL = "https://doitonline.york.gov.uk/BinsApi/EXOR/";

let api = {
  getPropertiesForPostCode(postcode) {
    let url = `${BASE_URL}/getPropertiesForPostCode/?postcode=${postcode}`

    return fetch(url).then((res) => res.json())
  },
  getWasteCollectionDatabyUprn(uprn) {
    let url = `${BASE_URL}/getWasteCollectionDatabyUprn/?uprn=${uprn}`

    return fetch(url).then((res) => res.json())
  }
 }

module.exports = api
