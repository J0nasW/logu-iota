// Encryption
var keygen = require("keygenerator");
//var PASSPHRASE = keygen._(); //Passphrase to encrypt the IOTA JSON Message.
var PASSPHRASE = "QClhgA6v3Cr9VHzRnuGue9mLrrOJcV9m";
var encryptor = require('simple-encryptor')(PASSPHRASE);

var json = {"Temperature": 12, "Humidity": 23, "dateTime": "21/09/2020 12:45:45", "container": "MWBNB564534884a", "booking_nr": 35646794533, "departure": "HAM", "arrival": "AMS", "content": "Blattsalat", "freeze": 1};
var json_string = JSON.stringify(json)

console.log(json)

var encrypted_json = encryptor.encrypt(json);
console.log(encrypted_json);


//var encrypted_json = "81350abffefb39aa252bd10b28c89e3f779607d33e8c711f1db700a97e22cfade28859879073ff0a370b6d112d3565137R6bRDf2MRKO1SXlC0m4CURj7hI1tincamLHeh/qXGcFPwKFXkUJFyn7KBhxu728J4D4AtHN+kkZ3EKtXNhPE+1yGEQGdyo8FxS99eeDt4wtjcInb2WiiVc8z/9f/oOxS5/FvqmbEhUcxbNncGENZQkn3xDZBfmqzbY+CeWiTcCozQxfoGZRyqTppX2BjDa9+/dJZjwd4Zt5PbA+9pmKlWn9WWcontO/c0/uRXc9NZUZQuZM24cSfDoEvUpCx7NVi5Dqc0ozvqjVZqD3WvsQ8g==+MR3XVT1f4NoZKryR1eYQRSPKHrgMiIPLICeBsnCt8vieGrAR7n/v0uBHb4JJurNnr3wMcf0XREZfqqiXDQByIZfvfNy/x/cjCwWLBWWHffcFhT4zAbOMIoULfs2aXyxRy9Vpwd370X64rEmVyBRAGdv9eGrNz2UDo73qi4yL0B0uchWQXmQroF5EYenw==/iyAdsQKW4r/koYsQAvmT6XrQP7fi5CCdHP3bjcAXMBfprKP/uWWmTBPDO87ja5Z74l2ZgmCHLz6yiZsojIRDdN9sUTaCnlMiq32ptnYD6s2abT1ekdCeezhqJQ5Tj/P8iLu+qxQ85P+gROsyomj/NwMLYdlZE8qfuWm9VACA+gbGTN08IwGoiTX+dY5vQDXZzTXIPLy+uOEz+SHBIookO0WfHRjeQ==";
//var encrypted_json = "715fb811a0c30829a8420694430d3625fb5673802cadd4722bae4f47e07e9e48ba68be393d7da774f10e4aeea5de454blx/nesYFP58ha41GK69Rw+KGGt9S95w6dFMKl13/oTcA545Zm495XVsQOA7hxXMzwyV3ldiW8OeU9Oc+k4MGYymB4zgWfwoRb9as4geLm9celAYTocwgMUL40Jltk+RDE82hdACd5TUPYrRRVVT4Ck95COUVFKi5LDEXfQy9aP6/iiTpLJu/wfDfC+/3zZ9nw2DsPx/W31NRMLRFHzf/ppTbsJsUCG2H8yX0vCifaC435I2QjO0htpyqtrloynSK";
var encrypted_json = "f301d7b152e3ba8c102fb06b72bb639013bcb4cb8abd9753082892a38fd90267320eecc6a89b4b3f6b9ffdcae0f6b253Pc6GIMJG9SoNdgMoZ+Ege4x1xh4OqnJtSTetq7a55NxnDtHtr25cpU03tvOS/joAxTm6fWuR3sm94mj634J2oKtMf+NT13bCUihjOO68uB29DvaJKbp81f9NXbemNR5FNGRFOUmDuerhR6HGD9LvcDGGztGs6WL8qvZw5KENefNLv5iMUGBzhuIaxfYqKYIGXGw3IlaJyQXlmC1OJaFHqAqVHgDviTlH+YruhD11ouI8M5XQ8B6W+knHHZEvf+YEghFq5YVnEqtVy6TU+7rG6g=="
var encrypted_json = "f301d7b152e3ba8c102fb06b72bb639013bcb4cb8abd9753082892a38fd90267320eecc6a89b4b3f6b9ffdcae0f6b253Pc6GIMJG9SoNdgMoZ+Ege4x1xh4OqnJtSTetq7a55NxnDtHtr25cpU03tvOS/joAxTm6fWuR3sm94mj634J2oKtMf+NT13bCUihjOO68uB29DvaJKbp81f9NXbemNR5FNGRFOUmDuerhR6HGD9LvcDGGztGs6WL8qvZw5KENefNLv5iMUGBzhuIaxfYqKYIGXGw3IlaJyQXlmC1OJaFHqAqVHgDviTlH+YruhD11ouI8M5XQ8B6W+knHHZEvf+YEghFq5YVnEqtVy6TU+7rG6g=="

var decrypted_json = encryptor.decrypt(encrypted_json);
console.log(decrypted_json);

