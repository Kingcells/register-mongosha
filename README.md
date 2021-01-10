# V12 Register Bot (With Mongosha)
## EN 
> Hi buddy! Today I will show you the registration bot I made. If there are many mistakes, please don't try to throw a chair at my head. If you wish, you can come to our [Discord Server](https://discord.gg/Sy5xRZMRx2) and ask about these problems. This bot uses Mongo as its database. ([Mongosha](https://www.npmjs.com/package/@aloshai/mongosha)) 

## Main Features

 - **Male** and **Female** registration.
 - **Old registered** names.
 - **Top registration** system.
 - Removing the member **from the registered** member.
 - Members you have registered **yourself**.
 - Classic name change
 - Welcome message.
 - Posting messages after registration.

## Settings 

        {
    
    "botSettings": {
        "token": "", // Your Bot Token
        "owners": [""], // Bot Owners
        "prefix": "", // Bot Prefix
        "botStatus": "", // Bot Status (Playing)
        "botVoiceChannelID": "", // Bot Voice Channel
        "mongoURL": "" // Mongo Connect URL
    },
    
    "channelSettings": {
        "register": "", // Register Channel
        "rules": "", // Rules Channel
        "wlcmessageChannel": "" // Welcome messages channel.
    },
    
    "roleSettings": {
        "registerer": "", // Registerer Role
        "booster": [""], // Booster Role
        "unregisteredRole": [""], // Unregistered roles. İf you want use multiply arrays.
        "girlRole": [""], // Woman Roles If you want use multiply arrays.
        "boyRole": [""] // Man roles. If you want use multiply arrays.
    },
    
    "colors": {
        "redColor": "RED", // Colors. If you want change this color.
        "magentaColor": "#AF48F1" 
    },
    
    "serverSettings": {
        "serverID": "", // Server ID
        "serverTag": "" // Server Tag
    }
    
    }
    
## Quick Setup    
        
1. You must have `node.js` installed on your system.
2. Open the directory you are in with the help of CMD or Powershell.
3. Install all modules. (`npm i`)
4. Edit the contents of `settings.json`.
5. Hurray! You are now ready.

## PL
> Cześć kolego! Dzisiaj pokażę Ci bota rejestracyjnego. Może być wiele błędów, możesz przyjść do naszego serwera [Discord](https://discord.gg/Sy5xRZMRx2) w tym celu. Ten bot zawiera moduł, który opracowaliśmy jako bazę danych. ([Mongosha](https://www.npmjs.com/package/@aloshai/mongosha)) 

> Normalne, jeśli masz problemy ze zrozumieniem tego bota. Ta łódź jest łodzią stworzoną dla wielu popularnych serwerów w Turcji. Nazywamy te serwery serwerami „publicznymi”. Jeśli mimo wszystko chcesz go używać, nie krępuj się. Jeśli ci się spodoba, nie zapomnij rzucić gwiazdki. :)

## Główne Cechy
 - Rejestracja **mężczyzn i kobiet**.
 - Zarejestrowano **stare nazwy**.
 - Władze z największą **liczbą zarejestrowany**.
 - Polecenie **przełączenia zarejestrowanych członków** na niezarejestrowanych członków.
 - Polecenie, aby **zobaczyć zarejestrowanych członków**.
 - Klasyczne **polecenie zmiany nazwy**.
 - Wiadomość **powitalna**.
 - Wiadomość dla **nowego zarejestrowanego** członka po rejestracji.

## Ustawienia
        {
    
    "botSettings": {
        "token": "", // Żeton bota
        "owners": [""], // Właściciele botów.
        "prefix": "", // Bota prefiks.
        "botStatus": "", // Stan bota (Gra)
        "botVoiceChannelID": "", // Identyfikator kanału głosowego.
        "mongoURL": "" // Adres URL linku Mongo
    },
    
    "channelSettings": {
        "register": "", // Kanał rejestracji nazwy.
        "rules": "", // Kanał reguł
        "wlcmessageChannel": "" // Za wiadomość powitalną.
    },
    
    "roleSettings": {
        "registerer": "", // Rola rejestratora.
        "booster": [""], // Rola boosterem.
        "unregisteredRole": [""], // Rola osoby obojętnej.
        "girlRole": [""], // Kobieca rola.
        "boyRole": [""] // Męska rola
    },
    
    "colors": {
        "redColor": "RED", 
        "magentaColor": "#AF48F1" 
    },
    
    "serverSettings": {
        "serverID": "", // Serwer ID
        "serverTag": "" // Serwer Tag
    }
    
    }

## Szybki Montaż

 1. Aby uruchomić bota, musisz mieć zainstalowany w systemie `node.js`.
 2. Otwórz swoją bieżącą lokalizację za pomocą CMD lub Powershell.
 3. Pobierz wszystkie moduły. (`npm i`)
 4. Zmień całą zawartość `settings.json`.
 5. Hurra! Jesteś teraz gotowy.

## TR
> Selam dostum! Bugün [Serendia Squad](https://discord.gg/Sy5xRZMRx2) için yaptığım Kayıt Botunu nasıl çalıştıracağını ve özelliklerini sana göstermek için buradayım. Unutma, hatalar olabilir hatalar olduğu için benim kafama sandalye fırlatmak yerine Discord Sunucumuza gelerek bu sorunu çözmemizi sağla. Kullandığın için şimdiden teşekkür etmek isterim. Bu altyapı Mongo kullanmaktadır. (Alosha'nın yaptığı [Mongosha](https://www.npmjs.com/package/@aloshai/mongosha) modülü.)

## Ana Özellikler

 - **Kadın** ve **Erkek** kayıt.
 - `Eski isimleri` görüntüleme şansı.
 - **En fazla kayıt eden** yetkilileri listelemek.
 - **Kayıt ettiğin kişileri** görüntülemek.
 - **İsim değiştirme** komutu.
 - Kayıttan sonra **seçili kanala katıldı mesajı** atma.

 

    
        
         {
        "botSettings": {
            "token": "", // Bot Tokenin.
            "owners": [""], // Bot Kurucuları
            "prefix": "", // Bot Öneki
            "botStatus": "", // Bot Durumu (Oynuyor)
            "botVoiceChannelID": "", // Botun katılacağı ses kanalı.
            "mongoURL": "" // Mongo bağlantı linki.
        },
        
        "channelSettings": {
            "register": "", // Kayıt kanalı.
            "rules": "", // Kural kanalı.
            "wlcmessageChannel": "" // Kayıttan sonra mesaj gönderilecek kanal.
        },
        
        "roleSettings": {
            "registerer": "", // Kayıt yetkilisi rolü.
            "booster": [""], // Booster üye rolü.
            "unregisteredRole": [""], // Kayıtsız üyelerin rolleri. Diziyi uzatabilirsiniz fakat diziden çıkartmayın.
            "girlRole": [""], // Kadın üye rolleri. Diziyi uzatabilirsiniz fakat diziden çıkartmayın.
            "boyRole": [""] // Erkek üye rolleri. Diziyi uzatabilirsiniz fakat diziden çıkartmayın.
        },
        
        "colors": {
            "redColor": "RED", // Renkler. Dilersen değişebilirsin.
            "magentaColor": "#AF48F1" 
        },
        
        "serverSettings": {
            "serverID": "", // Sunucu ID
            "serverTag": "" // Sunucu Tag
        }
        
        }
        
        
        
        
       
## Hızlı Kurulum
1. Sisteminde `node.js` kurulu olmak zorundadır.
2. Botun kök dosyasını CMD veya Powershell ile aç.
3. Bütün modülleri yükle. (`npm i`)
4. `Settings.json` dosyasını düzenle.
5. Hayda! Artık hazırsın.

### Thanks / Dziękuję Ci / Teşekkürler
**EN:** Thank you for helping in some sections.
**PL:** Dziękuję za pomoc w niektórych sekcjach.
**TR:** Bazı yerlerde yardımcı olduğunuz için teşekkürler.

    Yashinu#1000
    Alosha#3779
    Miaf#3787
    Davidson#0001

# Türkiye için Feragatname
> Bot büyük miktarda veri kaydediyor. Dilersen bu verileri kayıt etmesini önleyebilirsin. Gerçekten şaka yapmıyorum. Eğer büyük kitlelere hitap ediyorsan tek başına Mongo Cluster'ini ayırman gerekebilir. İlaveten botun içerisinde herhangi bir yerde Serendia Squad reklamı bulunmamakta. Bunu sen ya da başkası yapmadı, biz yaptık.
