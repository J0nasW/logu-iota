// Encryption
var keygen = require("keygenerator");
//var PASSPHRASE = keygen._(); //Passphrase to encrypt the IOTA JSON Message.
var PASSPHRASE = "l4Z8b4g7WI4oxQ5UCEZNwJyRNxHWKzPe";
var SimpleCrypto = require("simple-crypto-js").default
var encryptor = new SimpleCrypto(PASSPHRASE);

var json = {"Temperature": 12, "Humidity": 23, "dateTime": "21/09/2020 12:45:45", "container": "MWBNB564534884a", "booking_nr": 35646794533, "departure": "HAM", "arrival": "AMS", "content": "Blattsalat", "freeze": 1};
var json_string = JSON.stringify(json)

console.log(json)

var encrypted_json = encryptor.encrypt(json);
//console.log(encrypted_json);


//var encrypted_json = "81350abffefb39aa252bd10b28c89e3f779607d33e8c711f1db700a97e22cfade28859879073ff0a370b6d112d3565137R6bRDf2MRKO1SXlC0m4CURj7hI1tincamLHeh/qXGcFPwKFXkUJFyn7KBhxu728J4D4AtHN+kkZ3EKtXNhPE+1yGEQGdyo8FxS99eeDt4wtjcInb2WiiVc8z/9f/oOxS5/FvqmbEhUcxbNncGENZQkn3xDZBfmqzbY+CeWiTcCozQxfoGZRyqTppX2BjDa9+/dJZjwd4Zt5PbA+9pmKlWn9WWcontO/c0/uRXc9NZUZQuZM24cSfDoEvUpCx7NVi5Dqc0ozvqjVZqD3WvsQ8g==+MR3XVT1f4NoZKryR1eYQRSPKHrgMiIPLICeBsnCt8vieGrAR7n/v0uBHb4JJurNnr3wMcf0XREZfqqiXDQByIZfvfNy/x/cjCwWLBWWHffcFhT4zAbOMIoULfs2aXyxRy9Vpwd370X64rEmVyBRAGdv9eGrNz2UDo73qi4yL0B0uchWQXmQroF5EYenw==/iyAdsQKW4r/koYsQAvmT6XrQP7fi5CCdHP3bjcAXMBfprKP/uWWmTBPDO87ja5Z74l2ZgmCHLz6yiZsojIRDdN9sUTaCnlMiq32ptnYD6s2abT1ekdCeezhqJQ5Tj/P8iLu+qxQ85P+gROsyomj/NwMLYdlZE8qfuWm9VACA+gbGTN08IwGoiTX+dY5vQDXZzTXIPLy+uOEz+SHBIookO0WfHRjeQ==";
//var encrypted_json = "715fb811a0c30829a8420694430d3625fb5673802cadd4722bae4f47e07e9e48ba68be393d7da774f10e4aeea5de454blx/nesYFP58ha41GK69Rw+KGGt9S95w6dFMKl13/oTcA545Zm495XVsQOA7hxXMzwyV3ldiW8OeU9Oc+k4MGYymB4zgWfwoRb9as4geLm9celAYTocwgMUL40Jltk+RDE82hdACd5TUPYrRRVVT4Ck95COUVFKi5LDEXfQy9aP6/iiTpLJu/wfDfC+/3zZ9nw2DsPx/W31NRMLRFHzf/ppTbsJsUCG2H8yX0vCifaC435I2QjO0htpyqtrloynSK";
//var encrypted_json = "9a0278f32303bfd5b59504db413c2257720962640067dc5a680c57f7587a553eLTDL3gWTaGMMyIO1N9KUiDdpSTCmyHjHR2YNk/3xRlX1Z6ivkjWKh25kdsBGlBmKEt/16pL6MtzsOkV6uusSJOQQhm0Hskqtms1h0rnRiVF35b7YQWXAFrIIBlN+yKtVWVlHBGFgMBRQ06iYJZm02vtyB1/F1lfBHiZuonPtNCwrU5rHC9O/LSmHPtJ6Z3vm6Wk2VMdkQlb2ILLCr5s5TnQdo910lIpnFrfA2CO+Q6qOfk8gsUrU2uHmWPkfQYAle51e6ab457870c08f73edcac8287d434452201e43de37355a3c34afb86daa216"
var encrypted_json = "dc8917c5127617900fd6c16f0675408537f8f47d9ad8194d4688ffdc9b135151zWD1kEdiNINgXK0i+sncm4a4okLY/Mmla/Zy+7fPKp7IKS6XoqbM+aNFCKVrlSXUgR2rHQjh045PfW58IOcoHx6XGvBdUOwb0qyhjtQQyt9sa+f+OZ9zEe3U4CUZcnxETndYU6xX4TPL8qsIvPAJTERt4z9fVWQp5TtWLXFINMq6mnhnUchnb/iA1nmCJf+Dh8QJu3s0tQ6Vyow/zZjdEYQMWgMLqcsi2DQOA6myQNotbf7GyAva1GgZiGZFqWIH2Dw12iz1LWaIGHhZ/abyrQ==148368158019481fad36ffc2fa01aa3721e40393ba1f754bfe3d388efe5ea669"
var encrypted_json = "9b5c67bebb8b68b94a76b30b6881f5e73036d09c90e7c8fac73b88d3469ad8e0jo+uO+k82E6QcADG6fygEh4sSXHqK8TCtq0Xk9WzJPqXIRvavPysX/d2Jfb5lJ8Jbg/5MImjDYBN3jkCBE17GlXt3wy/22mT7OyyQeSHU1g+oBWL7n75MWR8kuDVj8vNzDxuWkcLEEXkQKRfJtxUMipDRdfjU2rn71QRRJbUEVzm3qm903wi/904rpO16QWBWjK+Mjp2guhlrvJ1M13bJFmWUzIIDUBuid3huPs+weJ0Rlp/RKBOBHzphM+UKYtpApyWupE7CR5uCNXSJrUrlA==e929c41a73c624bad8d43f56e4ecd8f464dddf8d84f08f3363a0c46083a65065"

var decrypted_json = encryptor.decrypt(encrypted_json);
console.log(decrypted_json);

