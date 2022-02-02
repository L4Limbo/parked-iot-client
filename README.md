# client
## Περιγραφή 
Το παρόν project αποτελεί το frontend μέρος της εφαρμογής Parked η οποία αναπτύχθηκε στα πλαίσια του μαθήματος Διαδίκτυο των πραγμάτων (Internet Of Things) και προορίζεται για χρήση από κινητή συσκευή.
Στο κύριο μέρος του client χρησιμοποιείται ένας χάρτης πάνω στον οποίο εμφανίζονται διαθέσιμες θέσεις Parking για άτομα με ειδικές ανάγκες (οι θέσεις στην παρούσα φάση είναι πλασματικές/μη υπαρκτές).

## Public Domain
Το project έχει ανέβει στην πλατφόρμα της Heroku: https://parked-iot-client.herokuapp.com/

## Backend
Το backend διατίθεται στο repository: https://github.com/L4Limbo/parked-iot-server

## Contributors
* Μητακίδης Ανέστης, Undergrad Student of ECE at the University of Patras. : https://github.com/L4Limbo
* Εμμανουήλ Τζαγάκης, Undergrad Student of ECE at the University of Patras. : https://github.com/Xenonas

# Οδηγίες Εγκατάστασης Frontend
## Project Download
```
git clone https://github.com/L4Limbo/parked-iot-client.git
```
### Είσοδος στον φάκελο του project 
```
cd parked-iot-client
```

### Δημιοργία .env
Προκειμένου να τρέξει o client και να φορτωθούν οι χάρτες χρειάζεται να δημιουργηθεί ένα .env file στους φακέλους ```src/``` και ```parked-iot-client/``` στο οποίο θα παρέχονται οι παρακάτω πληροφορίες:
```
VUE_APP_MAP_KEY=[GOOGLE MAPS KEY]
VUE_APP_API_URL=https://parked-iot-project.herokuapp.com/
APP_URL ='http://localhost:8080'
```
Στο πεδίο ```API_URL``` ορίζεται το url που τρέχει ο server αν χρησιμοποιηθεί η localhost έκδοση του API. 
Οδηγίες για δημιουργία [GOOGLE MAPS KEY]: https://developers.google.com/maps/documentation/javascript/get-api-key

## Εγκατάσταση απαιτήσεων
Σε Terminal μέσα στον φάκελο του Project
```
npm install 
```
## Τρέξιμο του client
Ανοίγει το project στο localhost στο port 8080.
Αν το port 8080 είναι απασχολημένο θα ανοίξει σε κάποιο άλλο (πιθανότατα στο 8081)
```
npm run serve
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).