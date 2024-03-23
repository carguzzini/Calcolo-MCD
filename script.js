
        function calcolaMCD() {
            var numero1 = parseInt(document.getElementById("numero1").value);
            var numero2 = parseInt(document.getElementById("numero2").value);

            // Calcola il MCD utilizzando l'algoritmo di Euclide
            var mcd = calcolaMCD_Euclide(numero1, numero2);

            // Mostra le divisioni
            var divisioniHtml = "Divisioni per trovare il MCD di " + numero1 + " e " + numero2 + ":<br>";
            var a = Math.max(numero1, numero2);
            var b = Math.min(numero1, numero2);
            while (b !== 0) {
                divisioniHtml += a + " ÷ " + b + " = " + Math.floor(a / b) + " con resto " + (a % b) + "<br>";
                var temp = b;
                b = a % b;
                a = temp;
            }

            // Aggiungi il risultato alla pagina
            document.getElementById("divisioni").innerHTML = divisioniHtml + "<br>Il MCD è " + mcd;
        }

        function calcolaMCD_Euclide(a, b) {
            while (b !== 0) {
                var temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
    