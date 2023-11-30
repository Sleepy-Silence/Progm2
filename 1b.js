class App
{
    runApplication()
    {
        this.greeting = "starting up"
        let appnaam = "demoapp"
        let versienummer = 0.1
        let versiedatum = "Thu Feb 02 2023 12:05:51 GMT+0100 (central European Standerd  time)"
        let auther = "Ahmad Almoustafa"
        let copyright = "A A"
        let distributeur = "A A"
        let darkmode = false
        console.log(app.greeting)
        console.log("appnaam: " + appnaam)
        console.log("versienummer: " + versienummer)
        console.log("versiedatum: " + versiedatum)
        console.log("auther: " + auther)
        console.log("copyright: " + copyright)
        console.log("distributeur: " + distributeur)
        console.log("darkmode: " + darkmode)
    }
}
let app = new App();
app.runApplication();