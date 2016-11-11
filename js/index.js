
    function searchAllMember() {

        $.ajax({
            //url: 서버 프로그램의 url
            url:"http://localhost:8080/bank/selectAllMember",
            //서버프로그램을 호출하는 방식 type을 생략하면 기본값으로 GET 방식을 사용한다.
            type: "GET",
            //dataType: 만약 jsonp방식으로 할 거면 명시
            dataType: "jsonp",
            //만약 jsonp 방식을 이용하면 jsonp 속성이 나와야 한다.
            jsonp: "callback",
            //만약 전달할 데이터가 있으면 data를 넣어줘야 한다.
            //3초만 기다리겠다는 것을 명시
            timeout: 3000,
            //성공하면 호출된다.
            success: function(result){
                //성공했을때의 화면처리
                alert("Search Complete!");
                $("#memberAll").empty();
                for(var i=0; i<result.length; i++) {
                    var tr = $("<tr></tr>");
                    var memberid = $("<td></td>").text(result[i].memberId);
                    var membername = $("<td></td>").text(result[i].memberName);
                    var memberaccount = $("<td></td>").text(result[i].memberAccount);
                    var memberbalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberid);
                    tr.append(membername);
                    tr.append(memberaccount);
                    tr.append(memberbalance);

                    $("#memberAll").append(tr);
                }
            },
            //실패하면 호출된다.
            error: function(){
                alert("Something wrong with the server");
            }
        });

    }

    function searchMember() {
        if(event.keyCode==13) {
            $.ajax({
                //url: 서버 프로그램의 url
                url: "http://localhost:8080/bank/selectID",
                //서버프로그램을 호출하는 방식 type을 생략하면 기본값으로 GET 방식을 사용한다.
                type: "GET",
                //dataType: 만약 jsonp방식으로 할 거면 명시
                dataType: "jsonp",
                //만약 jsonp 방식을 이용하면 jsonp 속성이 나와야 한다.
                jsonp: "callback",
                //만약 전달할 데이터가 있으면 data를 넣어줘야 한다.
                data: {
                    keyword: $("#memberId").val()
                },
                //3초만 기다리겠다는 것을 명시
                timeout: 3000,
                //성공하면 호출된다.
                success: function (result) {
                    //성공했을때의 화면처리
                    alert("Search Complete!");
                    $("#memberDetail").empty();
                    for (var i = 0; i < result.length; i++) {
                        var tr = $("<tr></tr>");
                        var memberid = $("<td></td>").text(result[i].memberId);
                        var membername = $("<td></td>").text(result[i].memberName);
                        var memberaccount = $("<td></td>").text(result[i].memberAccount);
                        var memberbalance = $("<td></td>").text(result[i].memberBalance);

                        tr.append(memberid);
                        tr.append(membername);
                        tr.append(memberaccount);
                        tr.append(memberbalance);

                        $("#memberDetail").append(tr);
                    }
                },
                //실패하면 호출된다.
                error: function () {
                    alert("Something wrong with the server");
                }
            });
        }


    }

    function inputBalance() {
        var id=$("#depositMemberId").val();
        var money=$("#depositMemberBalance").val();

        $.ajax({
           url: "http://localhost:8080/bank/deposit",
           dataType: "jsonp",
           jsonp:"callback",
           data:{
               memberId:id,
               memberBalance:money
           },
           success: function(){
               alert("Deposit Complete");

           },
           error: function(){
               alert("Something wrong with deposit");
           }
        });


    }

    function withdrawBalance() {
        var id=$("#withdrawMemberId").val();
        var money=$("#withdrawMemberBalance").val();

        $.ajax({
            url: "http://localhost:8080/bank/withdraw",
            dataType: "jsonp",
            jsonp:"callback",
            data:{
                memberId:id,
                memberBalance:money
            },
            success: function(){
                alert("Withdrawal Complete");

            },
            error: function(){
                alert("Something wrong with withdrawal");
            }
        });

    }

    function transferBalance(){
        var send=$("#sendMemberId").val();
        var receive=$("#receiveMemberId").val();
        var money=$("#transferBalance").val();

        $.ajax({
            url: "http://localhost:8080/bank/transfer",
            dataType:"jsonp",
            jsonp: "callback",
            data:{
                send: send,
                receive: receive,
                money: money
            },
            success:function(){
                alert("Transfer Complete");
            },
            eorr: function() {
                alert("Something wrong with transfer");
            }
        });
    }

    function checkMember(){
        var id=$("#checkMemberId").val();

        $.ajax({
            url: "http://localhost:8080/history",
            dataType: "jsonp",
            jsonp: "callback",
            data:{
                view: id
            },
            success: function(result){
                alert("History print complete");
                $("#history").val("");
                for(var i=0; i<result.length; i++){
                    var tr = $("<tr></tr>");
                    var viewerid = $("<td></td>").text(result[i].viewerId);
                    var money = $("<td></td>").text(result[i].money);

                    tr.append(viewerid);
                    tr.append(money);

                    $("#history").append(tr);

                }
            },
            error: function(){
                alert("Something wrong with history printing");
            }
        });
    }
