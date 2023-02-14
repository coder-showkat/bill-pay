function toastMessage(msg) {
    document.body.style.overflowX = 'hidden';
    let div = document.createElement('div');
    div.innerText = 'ⓘ ' + msg;
    div.style.position = 'fixed';
    div.style.top = '1.5rem';
    div.style.right = '-600px';
    div.style.zIndex = '1000';
    div.style.fontWeight = '600';
    div.style.background = 'rgba(255, 255, 255, 0.5)';
    div.style.color = '#07588e';
    div.style.transition = 'right .4s ease-in';
    div.style.padding = '.5rem .8rem';
    div.style.borderRadius = '.3rem';
    document.body.appendChild(div);
    setTimeout(()=>{
        div.style.right = '2rem';
    }, 400);
    setTimeout(()=>{
        div.style.right = '-600px';
        setTimeout(()=>{
            document.body.removeChild(div);
        }, 400);   
    }, 3000); 
}

function payLoading(msg, time) {
    let load = document.createElement('div');
    load.setAttribute('class', "fixed top-0 w-full h-[100vh] flex items-center justify-center z-50 bg-[rgba(255,255,255,0.2)]")
    let div = document.createElement('div');
    div.setAttribute('class', "w-[120px] h-[120px] border-[16px] border-[#f3f3f3] rounded-full border-t-[16px] border-t-[#3498db] animate-loading");
    load.appendChild(div);
    document.body.appendChild(load);

    setTimeout(()=> {
        document.body.removeChild(load);
        toastMessage(msg);
    }, time);
}