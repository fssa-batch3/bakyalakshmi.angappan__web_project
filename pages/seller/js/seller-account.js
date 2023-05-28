//get value from local storage
           
            const seller_list = JSON.parse(localStorage.getItem("seller_list"));

            const seller_id = JSON.parse(localStorage.getItem("seller_id"));

            function profile_data(e) {
              return e.email == seller_id;
            }

            const seller_data = seller_list.find(profile_data);

            document.getElementById("fullname").innerText = seller_data.corporate_name;
            document.getElementById("email").innerText = seller_data.email;
            document.getElementById("mobile_number").innerText = seller_data.mobile_number;

            document.getElementById("gender").innerText = seller_data.gender;
            document.getElementById("dateofbirth").innerText = seller_data.dob;
            document.getElementById("address").innerText = seller_data.address;
            document.getElementById("hintname").innerText = seller_data.hintname;

            function del(e) {
              const seller_list = JSON.parse(localStorage.getItem("seller_list"));

              const seller_id = JSON.parse(localStorage.getItem("seller_id"));

              function profile_data(e) {
                return e.email == seller_id;
              }

              const seller_data = seller_list.find(profile_data);

              const indexOfUser = seller_list.indexOf(seller_data);
              seller_list.splice(indexOfUser, 1);

              localStorage.setItem("seller_list", JSON.stringify(seller_list));
              localStorage.setItem("seller_id", "");

              location.href = "./account.html";
            }

            function logOut(e) {
              const logout = document.getElementById("logout");
              logout.onclick = "logOut(e)";

              localStorage.setItem("seller_id", "");

              location.href = "../../index.html";
            }
