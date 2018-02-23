var tab1 = document.getElementById('exercice1');

var arr = [["Javascript", "Ruby"], ["Php", "Html"], ["CSS", "Python"]];

function cont(){
    var d = new Date();
    var actualisation = setTimeout("cont();", 1000);
    d.setFullYear(2018, 1, 22);
    document.getElementById("dateTest").innerHTML = d;
    }
    cont();

    function exos1(){
        var arr = [["Javascript", "Ruby"], ["Php", "Html"], ["CSS", "Python"]];
        arr[0].splice(0,2, "css","html");
        arr[1].splice(0,2, "Javascript","Php");
        arr[2].splice(0,2, "Python","Ruby");
        document.getElementById("exo1").innerHTML = arr;
        }
        exos1();

        function exos2(){
            var obj = { "guadeloupe": 971, "martinique": 972, "guyane": 973, "reunion": 974};
            document.getElementById("exo2").innerHTML = obj.guadeloupe+', '+obj.martinique+', '+obj.guyane+', '+obj.reunion;
            }
            exos2();

            function exos3(){
                var listPays = ['France', 'Allemagne', 'Belgique', 'Suisse', 'Portugal'];
                var ajoutPays = ['Japon', 'Sloveni', 'Slovaqui', 'Chine', 'Coree'];
                var listPays = listPays.concat(ajoutPays);
                console.log(listPays);
                console.log(ajoutPays);
                document.getElementById("exo3").innerHTML = listPays;
                }
                exos3();

                function exos4(){
                    var list2Pays = ['France', 'Allemagne', 'Belgique', 'Suisse', 'Portugal'];
                    list2Pays.splice(0, 1);
                    console.log(list2Pays);
                    document.getElementById("exo4").innerHTML = list2Pays;
                    }
                    exos4();

                    function exos5(){
                        var obj1 = { "yo": 1, "foo": 9, "bar": 4 };
                        obj1.yo = 9;
                        obj1.foo = 1;
                        obj1.bar = 4;
                        for (x in obj1) {
                            document.getElementById("exo5").innerHTML += x +" "+ obj1[x] + "<br>";
                        }
                        console.log(obj1);
                        }
                        exos5();








