# My solar panels

My Solar Panels är en enkel webapp i React som är scaffoldad med Yeoman. Generatorn som används är https://github.com/stylesuxx/generator-react-webpack-redux.

För att komma igång behöver du bara starta Webpacks "dev-server".

## Mål med testet
Lös så många uppgifter du kan/hinner. Vi vill se små, fokuserade commits som beskriver förändringen du gjort. När du är klar kan du lämna in resultatet som en pull request.

## Uppgift 1
Solpanelen med id 2 strular ibland och behöver ses över. Därför vill husägaren flytta den till nedre raden, så att den blir mer lättillgänglig. Byt plats på panel 1 och panel 8.

## Uppgift 2
Vår designer har bestämt att vi ska kunna erbjuda två olika takfärger, istället för dagens hårdkodade grå tak. De två takstilarna ska vara grå och terrakotta.

## Uppgift 3
Solpanelerna är hårdkodade till en kapacitet på 250W, men nu ska vi även stödja olika typer av paneler, så kapaciteten måste vara konfigurerbar. Det är tillräckligt bra om kapaciteten definieras i samband med att id och takposition sätts.

## Uppgift 4
Vi vill nu lägga till en knapp som stoppar/startar alla solpaneler. Det naturliga sättet att bygga den är som en ny react-komponent. Scaffolda den helst med hjälp av yeoman. Denna generator använder vi: . Knappen kan visuellt ligga var som helst på sidan.

## Uppgift 5
Under senaste releasen så blev rubriken "My solar panels" vänsterställd. Den ska egentligen ligga centrerad över himlen. Detta måste rättas till. En ledtråd finns i git-historiken.

## Uppgift 6
Vår produktägare vill att texten som visar den uppmätta elproduktionen ska bli röd när den understiger 20% av maxkapaciteten.