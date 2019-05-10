/*

Fuzzy Logic File

Notes from Fuzzy Logic Toolbox.pdf

--- page 11

    Τρία Βάματα:
-Ασαφοποίηση εισόδων
-Εκτέλεση των λογικών πράξεων στις προϋποθέσεις του κανόνα και εύρεση του βαθμού υποστήριξης 
 (degree of support) του κανόνα (μεταξύ 0 και 1)
-Εφαρμογή του βαθμού υποστήρικηε στο αποτέλεσμα

Συνήθως δεν αρκεί ένας κανόνας. Απαιτούνται τουλάχιστον ένας κανόνας για κάθε ασαφή τιμή του στόχου..
Τα αποτελέσματα των ακανόνων συνδυάζονται.


---- page 12

1. Fuzzy inputs
2. Apply OR operator (max)
3. Apply implication operator (min)


---- page 13

    Ένα σύστημα ασαφούς συλλοιστικής αποτελείαι από τον προσδιορισμό των:
-Ασαφών μεταβλητών
-Ασαφών τιμών (συνόλων)
-Ασαφών κανόνων

    Δύο τύποι ασαφών συστημάτων
-Τύπου Mandami
Η έξοδος  των κανόνων είναι ασαφείς τιμές που πρέπει να συνδυαστούν
-Τύπου Sugeno
Η Έξοδος έίναι απευθείας πραγματικές τιμές


---- page 14

    Τα 5 Βήματα
Inputs (non-fuzzy) -> Rules (fuzzy) -> Results/Conbined rules (defuzzidied) -> Result (non-fuzzy)
1. Ασαφοποίηση εισόδων
    -Για κάθε μεταβλητή εισόδου, για κάθε ασαφή τιμή, προσδιορίζεται ο βαθμός συμμετοχής της.
2. Εφαρμογή ασαφών τελεστών
    πχ:
    -Σύζευξη AND: minimum, product
    -Διάζευκη: maximum, probor(a,b)= a + b - ab
3. Εφαρμογή μεθόδου συμπερασμού
    -Υπολογίζεται ο βαθμός στήριξης του κανόνα από τις προϋποθέσεις του
    -Ο ίδιος ο κανόνας έχει επίσης ένα βάρος (μεταξύ 0 και 1), το οποίο συνήθως είναι 1
    -Ο συνολικός βαθμός στήριξης προκύπτει από τη σύζευξη (AND) των παραπάνω δύο τιμών
    -Το αρχικό σσυμπέρασμα είναι ένα ασαφές σύνολο
    -Το συμπέρασμα αναμορφώνεται με βάση το βαθμό στήριξης του κανόνα, εφαρμόζοντας τον τελεστή AND.
4. Άθροιση των αποτελεσμάτων για κάθε ασαφή μεταβλητή εξόδου
    -Τα διάφορα ασαφή σύνολα που αποτελούν τις εξόδους των διαφόρων κανόνων (για την ίδια την μεταβλητή) 
     συνδυάζονται σε ένα ασαφές σύνολο για κάθε μεταβλητή εξόδου.
    -Τρεις μέθοδοι:
        -maximum
        -prodor
        -sum
5. Αποασαφοποίηση των τιμών
    Υποστηρίζονται πέντε μέθοδοι:
    -centroid (κεντρο βάρος)
    -besector (του εμβαδού)
    -middle of maximum (the average of the maximum value of th output set)
    -largerst of maximum
    -smallest of maximum


*/

//Input
//const tlDistance = "";
// tlColor = Green / Orange / Red
// tlDistance = far / middle / close      tlPlacement - carPlacement

//Output
//const carSpeedChoice = "";


function fuzzyLogic(tlColor, tlPlacement, carPlacement) {

    if (carPlacement < tlPlacement/3) {
        tlDistance = "far";
    }else if (carPlacement > tlPlacement*2/3) {
        tlDistance = "close";
    }else {
        tlDistance = "middle";
    }


    if (tlColor == "Green" || tlDistance == "far") {
        carSpeedChoice = "Normal Speed";
    }else if (tlColor == "Red" || tlDistance == "middle") {
        carSpeedChoice = "Slow Down";
    }else {
        carSpeedChoice = "Speed Up";
    }


    if (carSpeedChoice == "Normal Speed") {
        car.start()
    }else if (carSpeedChoice == "Slow Down") {
        car.stop()
    }else {
        car.fast()
    }

}


