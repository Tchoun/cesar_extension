/**
 * Blocs personnalisés pour le chiffrement César
 */
//% color="#E67E22" icon="\uf023" block="Cryptographie"
namespace cryptographie {

    /**
     * Chiffre un texte en utilisant le code César avec un décalage personnalisé.
     * @param texte Le texte à chiffrer, ex: "HELLO"
     * @param decalage Le nombre de positions à décaler, ex: 3
     */
    //% block="chiffrer le texte %texte avec un décalage de %decalage"
    //% decalage.defl=3
    export function chiffreCesar(texte: string, decalage: number): string {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let resultat = "";

        // Ajustement mathématique pour gérer les décalages négatifs
        decalage = ((decalage % 26) + 26) % 26;

        for (let i = 0; i < texte.length; i++) {
            let lettre = texte.charAt(i);
            let estMinuscule = (lettre >= "a" && lettre <= "z");
            let lettreMaj = lettre.toUpperCase();
            let position = alphabet.indexOf(lettreMaj);

            if (position >= 0) {
                let nouvellePosition = (position + decalage) % 26;
                let nouvelleLettre = alphabet.charAt(nouvellePosition);

                if (estMinuscule) {
                    resultat += nouvelleLettre.toLowerCase();
                } else {
                    resultat += nouvelleLettre;
                }
            } else {
                resultat += lettre;

            }
        }
        return resultat;
    }
}
