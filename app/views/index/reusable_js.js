//      var myDataReference = new Firebase('https://jeanepaul.firebaseio.com/');
//      var simpleMessages = $('.message').css({float: 'left'});
//      simpleMessages.keypress(function(e){
//            if (e.which == 13) {
//                var val = $(this).val();
//                myDataReference.push({message: val});
//                $('.messages').append('<li>' + val + '</li>');
//                $(this).val('');
//            }
//      });
//      function printChatMessage(message) {
//          $('messages').append('<li>' + message + '</li>')
//      }
//      myDataReference.on('child_added', function(snapshot){
//          var val = snapshot.val();
//          console.log(val);
//          $('.messages').append('<li>' + val.message + '</li>')
//      })

//      var myDataRef = [];
//      var a = [];
//
//      var test = {
//        testPush: function(e){
//            var array = e.name
//            var array = new Array;
//
//            array.push(e.message)
//        }
//      };
//
//      $('.message').keypress(function(e){
//          if (e.which == 13){
//              var value = $(this).val();
////              myDataRef.push({message: value});
//              test.testPush({name: 'a', message: value});
//              //$('.messages').append('<li>' + value + '</li>')
//              $(this).val('');
//          }
//      });
//
//      $(function(){
//          console.log('called');
//          $.each(a, function(value){
//              console.log('this value ' + value);
//          })
//
//      });