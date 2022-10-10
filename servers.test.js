describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a server name if the input box is empty', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  // My attempt:
  // it('should add a new row to table', function(){
  //   serverId++;
  //   allServers['server' + serverId] = { serverName };
  //   updateServerTable(); 
  //   expect(serverTbody.rows).toEqual(1);
  
  // })

  // Answer provided
  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
  });


  afterEach(function() {
    serverTbody.remove();
    serverTbody.innerHTML = '';
    allServers = {};
  });
});







