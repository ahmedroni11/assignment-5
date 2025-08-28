
    // Nav Element
    const navHeart = document.getElementById('navHeartCount');
    const navCoin = document.getElementById('navCoinCount');
    const navCopy = document.getElementById('navCopyCount');

    // History Container 
    const historyList = document.getElementById('historyList');
    const clearBtn = document.getElementById('clearHistory');

    // Value
    let heartCount = 0;
    let coinCount = 100; 
    let copyCount = 0;

    // Update navbar 
    function updateNavbar(){
      navHeart.textContent = heartCount;
      navCoin.textContent = coinCount;
      navCopy.textContent = copyCount;
    }

    // Heart Button
    document.querySelectorAll('.card-heart').forEach(btn => {
      btn.addEventListener('click', () => {
        
        heartCount += 1;
        updateNavbar();
        btn.textContent = '❤';
        btn.classList.add('text-rose-500');
        setTimeout(() => { btn.classList.remove('text-rose-500'); }, 700);
      });
    });

    // Copy Btn
    document.querySelectorAll('.copyBtn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const number = btn.getAttribute('data-number') || '';
        try{
          
          await navigator.clipboard.writeText(number);
          copyCount += 1;
          updateNavbar();
          alert('Number copied: ' + number);
        }catch(err){
          
          alert('Could not copy. Your browser may ask for clipboard permission.: ' + number);
        }
      });
    });

    // Call Btn
    document.querySelectorAll('.callBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const serviceName = btn.getAttribute('data-name') || 'Service';
        const serviceNum = btn.getAttribute('data-number') || '';

        // Coin Check
        if(coinCount < 20){
          alert('Not enough coins Each call costs 20 coins');
          return;
        }

        coinCount -= 20;
        updateNavbar();

        alert(serviceName + ' Calling — ' + serviceNum);

        
        const now = new Date();
        const timeStr = now.toLocaleTimeString();

        
        addHistoryItem(serviceName, serviceNum, timeStr);
      });
    });

    
    function addHistoryItem(name, number, time){
      const wrap = document.createElement('div');
      wrap.className = 'history-item p-3 flex justify-between items-center';

      const left = document.createElement('div');
      left.innerHTML = `<div class="text-sm font-medium">${name}</div><div class="text-xs text-slate-500 mt-0.5">${number}</div>`;

      const right = document.createElement('div');
      right.className = 'text-xs text-slate-500';
      right.textContent = time;

      wrap.appendChild(left);
      wrap.appendChild(right);

      historyList.prepend(wrap);
    }

    clearBtn.addEventListener('click', () => {
      if(historyList.children.length === 0){
        alert('No History to Delete');
        return;
      }
      if(confirm('Are you sure you want to delete history?')){
        historyList.innerHTML = '';
      }
    });

    // navbar update 

    updateNavbar();