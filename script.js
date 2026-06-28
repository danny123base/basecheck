document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("checkBtn");

    if(button){

        button.addEventListener("click", ()=>{

            const imei = document.getElementById("imei").value.trim();

            if(!imei){
                alert("Enter IMEI");
                return;
            }

            document.getElementById("result").innerHTML = `
            <div class="result-card">

                <h2>✅ Device Found</h2>

                <div class="row"><b>📱 Model:</b> iPhone 14 Pro Max</div>

                <div class="row"><b>🏢 Brand:</b> Apple</div>

                <div class="row"><b>🎨 Color:</b> Deep Purple</div>

                <div class="row"><b>💾 Storage:</b> 256 GB</div>

                <div class="row"><b>🌍 Region:</b> USA</div>

                <div class="row"><b>📅 Production:</b> September 2022</div>

                <div class="row"><b>☁️ iCloud:</b> OFF</div>

                <div class="row"><b>🔒 FMI:</b> OFF</div>

                <div class="row"><b>🚫 Blacklist:</b> CLEAN</div>

                <div class="row"><b>🔓 Carrier:</b> Unlocked</div>

                <div class="row"><b>⭐ Device Score:</b> 99/100</div>

                <div class="row"><b>💵 Estimated Value:</b> $630</div>

            </div>
            `;

        });

    }

});