let select_red=0;
let select_green=0;
let select_black=0;


start_activate=0;
target_activate=0;



function red(){
    select_red=1;
    select_green=0;
    select_black=0;
}

function green(){
    select_green=1;
    select_red=0;
    select_black=0;
}

function black(){
    select_black=1;
    select_green=0;
    select_red=0;
}


let grid_matrix=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

xstart=-2;
ystart=-2;
xtarget=-2;
ytarget=-2;

//................................................functions for each div.................................................................


function selection_0_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_0").style.backgroundColor=='red'){
                document.getElementById("grid_0_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_0").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=0;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_0").style.backgroundColor=='green'){
                document.getElementById("grid_0_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_0_0").style.backgroundColor=='black'){
            document.getElementById("grid_0_0").style.backgroundColor='aliceblue';
            grid_matrix[0][0]=0;
        }else{
            document.getElementById("grid_0_0").style.backgroundColor='black';
            grid_matrix[0][0]=-1;

        }
        
    }

}


function selection_0_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_1").style.backgroundColor=='red'){
                document.getElementById("grid_0_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_1").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_1").style.backgroundColor=='green'){
                document.getElementById("grid_0_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_1").style.backgroundColor=='black'){
            document.getElementById("grid_0_1").style.backgroundColor='aliceblue';
            grid_matrix[0][1]=0;
        }else{
            document.getElementById("grid_0_1").style.backgroundColor='black';
            grid_matrix[0][1]=-1;

        }
        
    }

}


function selection_0_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_2").style.backgroundColor=='red'){
                document.getElementById("grid_0_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_2").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_2").style.backgroundColor=='green'){
                document.getElementById("grid_0_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_2").style.backgroundColor=='black'){
            document.getElementById("grid_0_2").style.backgroundColor='aliceblue';
            grid_matrix[0][2]=0;
        }else{
            document.getElementById("grid_0_2").style.backgroundColor='black';
            grid_matrix[0][2]=-1;

        }
        
    }

}



function selection_0_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_3").style.backgroundColor=='red'){
                document.getElementById("grid_0_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_3").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_3").style.backgroundColor=='green'){
                document.getElementById("grid_0_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_3").style.backgroundColor=='black'){
            document.getElementById("grid_0_3").style.backgroundColor='aliceblue';
            grid_matrix[0][3]=0;
        }else{
            document.getElementById("grid_0_3").style.backgroundColor='black';
            grid_matrix[0][3]=-1;

        }
        
    }

}



function selection_0_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_4").style.backgroundColor=='red'){
                document.getElementById("grid_0_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_4").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_4").style.backgroundColor=='green'){
                document.getElementById("grid_0_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=4


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_4").style.backgroundColor=='black'){
            document.getElementById("grid_0_4").style.backgroundColor='aliceblue';
            grid_matrix[0][4]=0;
        }else{
            document.getElementById("grid_0_4").style.backgroundColor='black';
            grid_matrix[0][4]=-1;

        }
        
    }

}


function selection_0_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_5").style.backgroundColor=='red'){
                document.getElementById("grid_0_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_5").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_5").style.backgroundColor=='green'){
                document.getElementById("grid_0_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_5").style.backgroundColor=='black'){
            document.getElementById("grid_0_5").style.backgroundColor='aliceblue';
            grid_matrix[0][5]=0;
        }else{
            document.getElementById("grid_0_5").style.backgroundColor='black';
            grid_matrix[0][5]=-1;

        }
        
    }

}


function selection_0_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_6").style.backgroundColor=='red'){
                document.getElementById("grid_0_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_6").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_6").style.backgroundColor=='green'){
                document.getElementById("grid_0_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_6").style.backgroundColor=='black'){
            document.getElementById("grid_0_6").style.backgroundColor='aliceblue';
            grid_matrix[0][6]=0;
        }else{
            document.getElementById("grid_0_6").style.backgroundColor='black';
            grid_matrix[0][6]=-1;

        }
        
    }

}

function selection_0_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_7").style.backgroundColor=='red'){
                document.getElementById("grid_0_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_7").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_7").style.backgroundColor=='green'){
                document.getElementById("grid_0_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_7").style.backgroundColor=='black'){
            document.getElementById("grid_0_7").style.backgroundColor='aliceblue';
            grid_matrix[0][7]=0;
        }else{
            document.getElementById("grid_0_7").style.backgroundColor='black';
            grid_matrix[0][7]=-1;

        }
        
    }

}

function selection_0_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_8").style.backgroundColor=='red'){
                document.getElementById("grid_0_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_8").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_8").style.backgroundColor=='green'){
                document.getElementById("grid_0_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            yatrget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_8").style.backgroundColor=='black'){
            document.getElementById("grid_0_8").style.backgroundColor='aliceblue';
            grid_matrix[0][8]=0;
        }else{
            document.getElementById("grid_0_8").style.backgroundColor='black';
            grid_matrix[0][8]=-1;

        }
        
    }

}


function selection_0_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_9").style.backgroundColor=='red'){
                document.getElementById("grid_0_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_9").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_9").style.backgroundColor=='green'){
                document.getElementById("grid_0_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_9").style.backgroundColor=='black'){
            document.getElementById("grid_0_9").style.backgroundColor='aliceblue';
            grid_matrix[0][9]=0;
        }else{
            document.getElementById("grid_0_9").style.backgroundColor='black';
            grid_matrix[0][9]=-1;

        }
        
    }

}

function selection_0_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_10").style.backgroundColor=='red'){
                document.getElementById("grid_0_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_10").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_10").style.backgroundColor=='green'){
                document.getElementById("grid_0_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_10").style.backgroundColor=='black'){
            document.getElementById("grid_0_10").style.backgroundColor='aliceblue';
            grid_matrix[0][10]=0;
        }else{
            document.getElementById("grid_0_10").style.backgroundColor='black';
            grid_matrix[0][10]=-1;

        }
        
    }

}


function selection_0_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_11").style.backgroundColor=='red'){
                document.getElementById("grid_0_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_11").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_11").style.backgroundColor=='green'){
                document.getElementById("grid_0_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_11").style.backgroundColor=='black'){
            document.getElementById("grid_0_11").style.backgroundColor='aliceblue';
            grid_matrix[0][11]=0;
        }else{
            document.getElementById("grid_0_11").style.backgroundColor='black';
            grid_matrix[0][11]=-1;

        }
        
    }

}


function selection_0_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_12").style.backgroundColor=='red'){
                document.getElementById("grid_0_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_12").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_12").style.backgroundColor=='green'){
                document.getElementById("grid_0_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_12").style.backgroundColor=='black'){
            document.getElementById("grid_0_12").style.backgroundColor='aliceblue';
            grid_matrix[0][12]=0;
        }else{
            document.getElementById("grid_0_12").style.backgroundColor='black';
            grid_matrix[0][12]=-1;

        }
        
    }

}


function selection_0_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_13").style.backgroundColor=='red'){
                document.getElementById("grid_0_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_13").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_13").style.backgroundColor=='green'){
                document.getElementById("grid_0_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_13").style.backgroundColor=='black'){
            document.getElementById("grid_0_13").style.backgroundColor='aliceblue';
            grid_matrix[0][13]=0;
        }else{
            document.getElementById("grid_0_13").style.backgroundColor='black';
            grid_matrix[0][13]=-1;

        }
        
    }

}



function selection_0_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_14").style.backgroundColor=='red'){
                document.getElementById("grid_0_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_14").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_14").style.backgroundColor=='green'){
                document.getElementById("grid_0_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_14").style.backgroundColor=='black'){
            document.getElementById("grid_0_14").style.backgroundColor='aliceblue';
            grid_matrix[0][14]=0;
        }else{
            document.getElementById("grid_0_14").style.backgroundColor='black';
            grid_matrix[0][14]=-1;

        }
        
    }

}


function selection_0_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_15").style.backgroundColor=='red'){
                document.getElementById("grid_0_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_15").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_15").style.backgroundColor=='green'){
                document.getElementById("grid_0_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_15").style.backgroundColor=='black'){
            document.getElementById("grid_0_15").style.backgroundColor='aliceblue';
            grid_matrix[0][15]=0;
        }else{
            document.getElementById("grid_0_15").style.backgroundColor='black';
            grid_matrix[0][15]=-1;

        }
        
    }

}


function selection_0_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_16").style.backgroundColor=='red'){
                document.getElementById("grid_0_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_16").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_16").style.backgroundColor=='green'){
                document.getElementById("grid_0_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_16").style.backgroundColor=='black'){
            document.getElementById("grid_0_16").style.backgroundColor='aliceblue';
            grid_matrix[0][16]=0;
        }else{
            document.getElementById("grid_0_16").style.backgroundColor='black';
            grid_matrix[0][16]=-1;

        }
        
    }

}


function selection_0_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_17").style.backgroundColor=='red'){
                document.getElementById("grid_0_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_17").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_17").style.backgroundColor=='green'){
                document.getElementById("grid_0_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                yatrget=-2;

            }

        }else{
            document.getElementById("grid_0_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_17").style.backgroundColor=='black'){
            document.getElementById("grid_0_17").style.backgroundColor='aliceblue';
            grid_matrix[0][17]=0;
        }else{
            document.getElementById("grid_0_17").style.backgroundColor='black';
            grid_matrix[0][17]=-1;

        }
        
    }

}


function selection_0_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_18").style.backgroundColor=='red'){
                document.getElementById("grid_0_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_18").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_18").style.backgroundColor=='green'){
                document.getElementById("grid_0_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_0_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_18").style.backgroundColor=='black'){
            document.getElementById("grid_0_18").style.backgroundColor='aliceblue';
            grid_matrix[0][18]=0;
        }else{
            document.getElementById("grid_0_18").style.backgroundColor='black';
            grid_matrix[0][18]=-1;

        }
        
    }

}


function selection_0_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_0_19").style.backgroundColor=='red'){
                document.getElementById("grid_0_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_0_19").style.backgroundColor='red';
            start_activate=1;
            xstart=0;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_0_19").style.backgroundColor=='green'){
                document.getElementById("grid_0_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                yatrget=-2;

            }

        }else{
            document.getElementById("grid_0_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=0;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_0_19").style.backgroundColor=='black'){
            document.getElementById("grid_0_19").style.backgroundColor='aliceblue';
            grid_matrix[0][19]=0;
        }else{
            document.getElementById("grid_0_19").style.backgroundColor='black';
            grid_matrix[0][19]=-1;

        }
        
    }

}


//.....................................................................................................................................


function selection_1_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_0").style.backgroundColor=='red'){
                document.getElementById("grid_1_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_0").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_0").style.backgroundColor=='green'){
                document.getElementById("grid_1_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_1_0").style.backgroundColor=='black'){
            document.getElementById("grid_1_0").style.backgroundColor='aliceblue';
            grid_matrix[1][0]=0;
        }else{
            document.getElementById("grid_1_0").style.backgroundColor='black';
            grid_matrix[1][0]=-1;

        }
        
    }

}


function selection_1_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_1").style.backgroundColor=='red'){
                document.getElementById("grid_1_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_1").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_1").style.backgroundColor=='green'){
                document.getElementById("grid_1_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_1").style.backgroundColor=='black'){
            document.getElementById("grid_1_1").style.backgroundColor='aliceblue';
            grid_matrix[1][1]=0;
        }else{
            document.getElementById("grid_1_1").style.backgroundColor='black';
            grid_matrix[1][1]=-1;

        }
        
    }

}


function selection_1_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_2").style.backgroundColor=='red'){
                document.getElementById("grid_1_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_2").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_2").style.backgroundColor=='green'){
                document.getElementById("grid_1_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_2").style.backgroundColor=='black'){
            document.getElementById("grid_1_2").style.backgroundColor='aliceblue';
            grid_matrix[1][2]=0;
        }else{
            document.getElementById("grid_1_2").style.backgroundColor='black';
            grid_matrix[1][2]=-1;

        }
        
    }

}



function selection_1_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_3").style.backgroundColor=='red'){
                document.getElementById("grid_1_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_3").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_3").style.backgroundColor=='green'){
                document.getElementById("grid_1_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_3").style.backgroundColor=='black'){
            document.getElementById("grid_1_3").style.backgroundColor='aliceblue';
            grid_matrix[1][3]=0;
        }else{
            document.getElementById("grid_1_3").style.backgroundColor='black';
            grid_matrix[1][3]=-1;

        }
        
    }

}



function selection_1_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_4").style.backgroundColor=='red'){
                document.getElementById("grid_1_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_4").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_4").style.backgroundColor=='green'){
                document.getElementById("grid_1_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_4").style.backgroundColor=='black'){
            document.getElementById("grid_1_4").style.backgroundColor='aliceblue';
            grid_matrix[1][4]=0;
        }else{
            document.getElementById("grid_1_4").style.backgroundColor='black';
            grid_matrix[1][4]=-1;

        }
        
    }

}


function selection_1_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_5").style.backgroundColor=='red'){
                document.getElementById("grid_1_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_5").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_5").style.backgroundColor=='green'){
                document.getElementById("grid_1_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_5").style.backgroundColor=='black'){
            document.getElementById("grid_1_5").style.backgroundColor='aliceblue';
            grid_matrix[1][5]=0;
        }else{
            document.getElementById("grid_1_5").style.backgroundColor='black';
            grid_matrix[1][5]=-1;

        }
        
    }

}


function selection_1_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_6").style.backgroundColor=='red'){
                document.getElementById("grid_1_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_6").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_6").style.backgroundColor=='green'){
                document.getElementById("grid_1_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_6").style.backgroundColor=='black'){
            document.getElementById("grid_1_6").style.backgroundColor='aliceblue';
            grid_matrix[1][6]=0;
        }else{
            document.getElementById("grid_1_6").style.backgroundColor='black';
            grid_matrix[1][6]=-1;

        }
        
    }

}

function selection_1_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_7").style.backgroundColor=='red'){
                document.getElementById("grid_1_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_7").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_7").style.backgroundColor=='green'){
                document.getElementById("grid_1_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_7").style.backgroundColor=='black'){
            document.getElementById("grid_1_7").style.backgroundColor='aliceblue';
            grid_matrix[1][7]=0;
        }else{
            document.getElementById("grid_1_7").style.backgroundColor='black';
            grid_matrix[1][7]=-1;

        }
        
    }

}

function selection_1_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_8").style.backgroundColor=='red'){
                document.getElementById("grid_1_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_8").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_8").style.backgroundColor=='green'){
                document.getElementById("grid_1_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_8").style.backgroundColor=='black'){
            document.getElementById("grid_1_8").style.backgroundColor='aliceblue';
            grid_matrix[1][8]=0;
        }else{
            document.getElementById("grid_1_8").style.backgroundColor='black';
            grid_matrix[1][8]=-1;

        }
        
    }

}


function selection_1_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_9").style.backgroundColor=='red'){
                document.getElementById("grid_1_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_9").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_9").style.backgroundColor=='green'){
                document.getElementById("grid_1_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_9").style.backgroundColor=='black'){
            document.getElementById("grid_1_9").style.backgroundColor='aliceblue';
            grid_matrix[1][9]=0;
        }else{
            document.getElementById("grid_1_9").style.backgroundColor='black';
            grid_matrix[1][9]=-1;

        }
        
    }

}

function selection_1_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_10").style.backgroundColor=='red'){
                document.getElementById("grid_1_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_10").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_10").style.backgroundColor=='green'){
                document.getElementById("grid_1_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_10").style.backgroundColor=='black'){
            document.getElementById("grid_1_10").style.backgroundColor='aliceblue';
            grid_matrix[1][10]=0;
        }else{
            document.getElementById("grid_1_10").style.backgroundColor='black';
            grid_matrix[1][10]=-1;

        }
        
    }

}


function selection_1_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_11").style.backgroundColor=='red'){
                document.getElementById("grid_1_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_11").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_11").style.backgroundColor=='green'){
                document.getElementById("grid_1_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_11").style.backgroundColor=='black'){
            document.getElementById("grid_1_11").style.backgroundColor='aliceblue';
            grid_matrix[1][11]=0;
        }else{
            document.getElementById("grid_1_11").style.backgroundColor='black';
            grid_matrix[1][11]=-1;

        }
        
    }

}


function selection_1_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_12").style.backgroundColor=='red'){
                document.getElementById("grid_1_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_12").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_12").style.backgroundColor=='green'){
                document.getElementById("grid_1_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=12;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_12").style.backgroundColor=='black'){
            document.getElementById("grid_1_12").style.backgroundColor='aliceblue';
            grid_matrix[1][12]=0;
        }else{
            document.getElementById("grid_1_12").style.backgroundColor='black';
            grid_matrix[1][12]=-1;

        }
        
    }

}


function selection_1_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_13").style.backgroundColor=='red'){
                document.getElementById("grid_1_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_13").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_13").style.backgroundColor=='green'){
                document.getElementById("grid_1_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=13;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_13").style.backgroundColor=='black'){
            document.getElementById("grid_1_13").style.backgroundColor='aliceblue';
            grid_matrix[1][13]=0;
        }else{
            document.getElementById("grid_1_13").style.backgroundColor='black';
            grid_matrix[1][13]=-1;

        }
        
    }

}



function selection_1_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_14").style.backgroundColor=='red'){
                document.getElementById("grid_1_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_14").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_14").style.backgroundColor=='green'){
                document.getElementById("grid_1_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=14;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_14").style.backgroundColor=='black'){
            document.getElementById("grid_1_14").style.backgroundColor='aliceblue';
            grid_matrix[1][14]=0;
        }else{
            document.getElementById("grid_1_14").style.backgroundColor='black';
            grid_matrix[1][14]=-1;

        }
        
    }

}


function selection_1_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_15").style.backgroundColor=='red'){
                document.getElementById("grid_1_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_15").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_15").style.backgroundColor=='green'){
                document.getElementById("grid_1_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=15;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_15").style.backgroundColor=='black'){
            document.getElementById("grid_1_15").style.backgroundColor='aliceblue';
            grid_matrix[1][15]=0;
        }else{
            document.getElementById("grid_1_15").style.backgroundColor='black';
            grid_matrix[1][15]=-1;

        }
        
    }

}


function selection_1_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_16").style.backgroundColor=='red'){
                document.getElementById("grid_1_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_16").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_16").style.backgroundColor=='green'){
                document.getElementById("grid_1_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=16;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_16").style.backgroundColor=='black'){
            document.getElementById("grid_1_16").style.backgroundColor='aliceblue';
            grid_matrix[1][16]=0;
        }else{
            document.getElementById("grid_1_16").style.backgroundColor='black';
            grid_matrix[1][16]=-1;

        }
        
    }

}


function selection_1_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_17").style.backgroundColor=='red'){
                document.getElementById("grid_1_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_17").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_17").style.backgroundColor=='green'){
                document.getElementById("grid_1_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=17;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_17").style.backgroundColor=='black'){
            document.getElementById("grid_1_17").style.backgroundColor='aliceblue';
            grid_matrix[1][17]=-1;
        }else{
            document.getElementById("grid_1_17").style.backgroundColor='black';
            grid_matrix[1][17]=0;

        }
        
    }

}


function selection_1_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_18").style.backgroundColor=='red'){
                document.getElementById("grid_1_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_18").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_18").style.backgroundColor=='green'){
                document.getElementById("grid_1_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=18;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_18").style.backgroundColor=='black'){
            document.getElementById("grid_1_18").style.backgroundColor='aliceblue';
            grid_matrix[1][18]=0;
        }else{
            document.getElementById("grid_1_18").style.backgroundColor='black';
            grid_matrix[1][18]=-1;

        }
        
    }

}


function selection_1_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_1_19").style.backgroundColor=='red'){
                document.getElementById("grid_1_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_1_19").style.backgroundColor='red';
            start_activate=1;
            xstart=1;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_1_19").style.backgroundColor=='green'){
                document.getElementById("grid_1_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_1_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=1;
            ytarget=19;



        }

        
    }
    if (select_black){
        if(document.getElementById("grid_1_19").style.backgroundColor=='black'){
            document.getElementById("grid_1_19").style.backgroundColor='aliceblue';
            grid_matrix[1][19]=0;
        }else{
            document.getElementById("grid_1_19").style.backgroundColor='black';
            grid_matrix[1][19]=-1;

        }
        
    }

}

//..........................................................................................................................................


function selection_2_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_0").style.backgroundColor=='red'){
                document.getElementById("grid_2_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_0").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_0").style.backgroundColor=='green'){
                document.getElementById("grid_2_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=0;



        }

        
    }

    if (select_black){
        if(document.getElementById("grid_2_0").style.backgroundColor=='black'){
            document.getElementById("grid_2_0").style.backgroundColor='aliceblue';
            grid_matrix[2][0]=0;
        }else{
            document.getElementById("grid_2_0").style.backgroundColor='black';
            grid_matrix[2][0]=-1;

        }
        
    }

}


function selection_2_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_1").style.backgroundColor=='red'){
                document.getElementById("grid_2_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_1").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_1").style.backgroundColor=='green'){
                document.getElementById("grid_2_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_1").style.backgroundColor=='black'){
            document.getElementById("grid_2_1").style.backgroundColor='aliceblue';
            grid_matrix[2][1]=0;
        }else{
            document.getElementById("grid_2_1").style.backgroundColor='black';
            grid_matrix[2][1]=-1;

        }
        
    }

}


function selection_2_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_2").style.backgroundColor=='red'){
                document.getElementById("grid_2_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_2").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_2").style.backgroundColor=='green'){
                document.getElementById("grid_2_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_2").style.backgroundColor=='black'){
            document.getElementById("grid_2_2").style.backgroundColor='aliceblue';
            grid_matrix[2][2]=0;
        }else{
            document.getElementById("grid_2_2").style.backgroundColor='black';
            grid_matrix[2][2]=-1;

        }
        
    }

}



function selection_2_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_3").style.backgroundColor=='red'){
                document.getElementById("grid_2_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_3").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_3").style.backgroundColor=='green'){
                document.getElementById("grid_2_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_3").style.backgroundColor=='black'){
            document.getElementById("grid_2_3").style.backgroundColor='aliceblue';
            grid_matrix[2][3]=0;
        }else{
            document.getElementById("grid_2_3").style.backgroundColor='black';
            grid_matrix[2][3]=-1;

        }
        
    }

}



function selection_2_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_4").style.backgroundColor=='red'){
                document.getElementById("grid_2_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_4").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=4;

        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_4").style.backgroundColor=='green'){
                document.getElementById("grid_2_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_4").style.backgroundColor=='black'){
            document.getElementById("grid_2_4").style.backgroundColor='aliceblue';
            grid_matrix[2][4]=0;
        }else{
            document.getElementById("grid_2_4").style.backgroundColor='black';
            grid_matrix[2][4]=-1;

        }
        
    }

}


function selection_2_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_5").style.backgroundColor=='red'){
                document.getElementById("grid_2_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_5").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_5").style.backgroundColor=='green'){
                document.getElementById("grid_2_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_5").style.backgroundColor=='black'){
            document.getElementById("grid_2_5").style.backgroundColor='aliceblue';
            grid_matrix[2][5]=0;
        }else{
            document.getElementById("grid_2_5").style.backgroundColor='black';
            grid_matrix[2][5]=-1;

        }
        
    }

}


function selection_2_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_6").style.backgroundColor=='red'){
                document.getElementById("grid_2_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_6").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_6").style.backgroundColor=='green'){
                document.getElementById("grid_2_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_6").style.backgroundColor=='black'){
            document.getElementById("grid_2_6").style.backgroundColor='aliceblue';
            grid_matrix[2][6]=0;
        }else{
            document.getElementById("grid_2_6").style.backgroundColor='black';
            grid_matrix[2][6]=-1;

        }
        
    }

}

function selection_2_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_7").style.backgroundColor=='red'){
                document.getElementById("grid_2_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_7").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_7").style.backgroundColor=='green'){
                document.getElementById("grid_2_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_7").style.backgroundColor=='black'){
            document.getElementById("grid_2_7").style.backgroundColor='aliceblue';
            grid_matrix[2][7]=0;
        }else{
            document.getElementById("grid_2_7").style.backgroundColor='black';
            grid_matrix[2][7]=-1;

        }
        
    }

}

function selection_2_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_8").style.backgroundColor=='red'){
                document.getElementById("grid_2_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2

            }

        }else{
            document.getElementById("grid_2_8").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_8").style.backgroundColor=='green'){
                document.getElementById("grid_2_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_8").style.backgroundColor=='black'){
            document.getElementById("grid_2_8").style.backgroundColor='aliceblue';
            grid_matrix[2][8]=0;
        }else{
            document.getElementById("grid_2_8").style.backgroundColor='black';
            grid_matrix[2][8]=-1;

        }
        
    }

}


function selection_2_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_9").style.backgroundColor=='red'){
                document.getElementById("grid_2_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_9").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_9").style.backgroundColor=='green'){
                document.getElementById("grid_2_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_9").style.backgroundColor=='black'){
            document.getElementById("grid_2_9").style.backgroundColor='aliceblue';
            grid_matrix[2][9]=0;
        }else{
            document.getElementById("grid_2_9").style.backgroundColor='black';
            grid_matrix[2][9]=-1;

        }
        
    }

}

function selection_2_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_10").style.backgroundColor=='red'){
                document.getElementById("grid_2_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_10").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_10").style.backgroundColor=='green'){
                document.getElementById("grid_2_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_10").style.backgroundColor=='black'){
            document.getElementById("grid_2_10").style.backgroundColor='aliceblue';
            grid_matrix[2][10]=0;
        }else{
            document.getElementById("grid_2_10").style.backgroundColor='black';
            grid_matrix[2][10]=-1;

        }
        
    }

}


function selection_2_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_11").style.backgroundColor=='red'){
                document.getElementById("grid_2_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_11").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_11").style.backgroundColor=='green'){
                document.getElementById("grid_2_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_11").style.backgroundColor=='black'){
            document.getElementById("grid_2_11").style.backgroundColor='aliceblue';
            grid_matrix[2][11]=0;
        }else{
            document.getElementById("grid_2_11").style.backgroundColor='black';
            grid_matrix[2][11]=-1;

        }
        
    }

}


function selection_2_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_12").style.backgroundColor=='red'){
                document.getElementById("grid_2_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_12").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_12").style.backgroundColor=='green'){
                document.getElementById("grid_2_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_12").style.backgroundColor=='black'){
            document.getElementById("grid_2_12").style.backgroundColor='aliceblue';
            grid_matrix[2][12]=0;
        }else{
            document.getElementById("grid_2_12").style.backgroundColor='black';
            grid_matrix[2][12]=-1;

        }
        
    }

}


function selection_2_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_13").style.backgroundColor=='red'){
                document.getElementById("grid_2_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_13").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_13").style.backgroundColor=='green'){
                document.getElementById("grid_2_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_13").style.backgroundColor=='black'){
            document.getElementById("grid_2_13").style.backgroundColor='aliceblue';
            grid_matrix[2][13]=0;
        }else{
            document.getElementById("grid_2_13").style.backgroundColor='black';
            grid_matrix[2][13]=-1;

        }
        
    }

}



function selection_2_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_14").style.backgroundColor=='red'){
                document.getElementById("grid_2_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_14").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_14").style.backgroundColor=='green'){
                document.getElementById("grid_2_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_14").style.backgroundColor=='black'){
            document.getElementById("grid_2_14").style.backgroundColor='aliceblue';
            grid_matrix[2][14]=0;
        }else{
            document.getElementById("grid_2_14").style.backgroundColor='black';
            grid_matrix[2][14]=-1;

        }
        
    }

}


function selection_2_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_15").style.backgroundColor=='red'){
                document.getElementById("grid_2_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_15").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_15").style.backgroundColor=='green'){
                document.getElementById("grid_2_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_15").style.backgroundColor=='black'){
            document.getElementById("grid_2_15").style.backgroundColor='aliceblue';
            grid_matrix[2][15]=0;
        }else{
            document.getElementById("grid_2_15").style.backgroundColor='black';
            grid_matrix[2][15]=-1;

        }
        
    }

}


function selection_2_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_16").style.backgroundColor=='red'){
                document.getElementById("grid_2_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_16").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_16").style.backgroundColor=='green'){
                document.getElementById("grid_2_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_16").style.backgroundColor=='black'){
            document.getElementById("grid_2_16").style.backgroundColor='aliceblue';
            grid_matrix[2][16]=0;
        }else{
            document.getElementById("grid_2_16").style.backgroundColor='black';
            grid_matrix[2][16]=-1;

        }
        
    }

}


function selection_2_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_17").style.backgroundColor=='red'){
                document.getElementById("grid_2_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_17").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_17").style.backgroundColor=='green'){
                document.getElementById("grid_2_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_17").style.backgroundColor=='black'){
            document.getElementById("grid_2_17").style.backgroundColor='aliceblue';
            grid_matrix[2][17]=0;
        }else{
            document.getElementById("grid_2_17").style.backgroundColor='black';
            grid_matrix[2][17]=-1;

        }
        
    }

}


function selection_2_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_18").style.backgroundColor=='red'){
                document.getElementById("grid_2_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_18").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_18").style.backgroundColor=='green'){
                document.getElementById("grid_2_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_18").style.backgroundColor=='black'){
            document.getElementById("grid_2_18").style.backgroundColor='aliceblue';
            grid_matrix[2][18]=0;
        }else{
            document.getElementById("grid_2_18").style.backgroundColor='black';
            grid_matrix[2][18]=-1;

        }
        
    }

}


function selection_2_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_2_19").style.backgroundColor=='red'){
                document.getElementById("grid_2_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_2_19").style.backgroundColor='red';
            start_activate=1;
            xstart=2;
            ystart=19;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_2_19").style.backgroundColor=='green'){
                document.getElementById("grid_2_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_2_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=2;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_2_19").style.backgroundColor=='black'){
            document.getElementById("grid_2_19").style.backgroundColor='aliceblue';
            grid_matrix[2][19]=0;
        }else{
            document.getElementById("grid_2_19").style.backgroundColor='black';
            grid_matrix[2][19]=-1;
        }
        
    }

}

//.......................................................................................................................................


function selection_3_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_0").style.backgroundColor=='red'){
                document.getElementById("grid_3_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_0").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=0;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_0").style.backgroundColor=='green'){
                document.getElementById("grid_3_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_3_0").style.backgroundColor=='black'){
            document.getElementById("grid_3_0").style.backgroundColor='aliceblue';
            grid_matrix[3][0]=0;
        }else{
            document.getElementById("grid_3_0").style.backgroundColor='black';
            grid_matrix[3][0]=-1;
        }
        
    }

}


function selection_3_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_1").style.backgroundColor=='red'){
                document.getElementById("grid_3_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_1").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=1;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_1").style.backgroundColor=='green'){
                document.getElementById("grid_3_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_1").style.backgroundColor=='black'){
            document.getElementById("grid_3_1").style.backgroundColor='aliceblue';
            grid_matrix[3][1]=0;
        }else{
            document.getElementById("grid_3_1").style.backgroundColor='black';
            grid_matrix[3][1]=-1;

        }
        
    }

}


function selection_3_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_2").style.backgroundColor=='red'){
                document.getElementById("grid_3_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_2").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=2;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_2").style.backgroundColor=='green'){
                document.getElementById("grid_3_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_2").style.backgroundColor=='black'){
            document.getElementById("grid_3_2").style.backgroundColor='aliceblue';
            grid_matrix[3][2]=0;
        }else{
            document.getElementById("grid_3_2").style.backgroundColor='black';
            grid_matrix[3][2]=-1;

        }
        
    }

}



function selection_3_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_3").style.backgroundColor=='red'){
                document.getElementById("grid_3_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_3").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=3;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_3").style.backgroundColor=='green'){
                document.getElementById("grid_3_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_3").style.backgroundColor=='black'){
            document.getElementById("grid_3_3").style.backgroundColor='aliceblue';
            grid_matrix[3][3]=0;
        }else{
            document.getElementById("grid_3_3").style.backgroundColor='black';
            grid_matrix[3][3]=-1;

        }
        
    }

}



function selection_3_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_4").style.backgroundColor=='red'){
                document.getElementById("grid_3_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_4").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=4;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_4").style.backgroundColor=='green'){
                document.getElementById("grid_3_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_4").style.backgroundColor=='black'){
            document.getElementById("grid_3_4").style.backgroundColor='aliceblue';
            grid_matrix[3][4]=0;
        }else{
            document.getElementById("grid_3_4").style.backgroundColor='black';
            grid_matrix[3][4]=-1;

        }
        
    }

}


function selection_3_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_5").style.backgroundColor=='red'){
                document.getElementById("grid_3_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_5").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=5;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_5").style.backgroundColor=='green'){
                document.getElementById("grid_3_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2

            }

        }else{
            document.getElementById("grid_3_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_5").style.backgroundColor=='black'){
            document.getElementById("grid_3_5").style.backgroundColor='aliceblue';
            grid_matrix[3][5]=0;
        }else{
            document.getElementById("grid_3_5").style.backgroundColor='black';
            grid_matrix[3][5]=-1;
        }
        
    }

}


function selection_3_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_6").style.backgroundColor=='red'){
                document.getElementById("grid_3_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_6").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=6;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_6").style.backgroundColor=='green'){
                document.getElementById("grid_3_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_6").style.backgroundColor=='black'){
            document.getElementById("grid_3_6").style.backgroundColor='aliceblue';
            grid_matrix[3][6]=0;
        }else{
            document.getElementById("grid_3_6").style.backgroundColor='black';
            grid_matrix[3][6]=-1;
        }
        
    }

}

function selection_3_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_7").style.backgroundColor=='red'){
                document.getElementById("grid_3_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_7").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=7;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_7").style.backgroundColor=='green'){
                document.getElementById("grid_3_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_7").style.backgroundColor=='black'){
            document.getElementById("grid_3_7").style.backgroundColor='aliceblue';
            grid_matrix[3][7]=0;
        }else{
            document.getElementById("grid_3_7").style.backgroundColor='black';
            grid_matrix[3][7]=-1;

        }
        
    }

}

function selection_3_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_8").style.backgroundColor=='red'){
                document.getElementById("grid_3_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_8").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=8;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_8").style.backgroundColor=='green'){
                document.getElementById("grid_3_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_8").style.backgroundColor=='black'){
            document.getElementById("grid_3_8").style.backgroundColor='aliceblue';
            grid_matrix[3][8]=0;
        }else{
            document.getElementById("grid_3_8").style.backgroundColor='black';
            grid_matrix[3][8]=-1;
        }
        
    }

}


function selection_3_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_9").style.backgroundColor=='red'){
                document.getElementById("grid_3_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_9").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=9;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_9").style.backgroundColor=='green'){
                document.getElementById("grid_3_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_9").style.backgroundColor=='black'){
            document.getElementById("grid_3_9").style.backgroundColor='aliceblue';
            grid_matrix[3][9]=0;
        }else{
            document.getElementById("grid_3_9").style.backgroundColor='black';
            grid_matrix[3][9]=-1;

        }
        
    }

}

function selection_3_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_10").style.backgroundColor=='red'){
                document.getElementById("grid_3_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_10").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=10;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_10").style.backgroundColor=='green'){
                document.getElementById("grid_3_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_10").style.backgroundColor=='black'){
            document.getElementById("grid_3_10").style.backgroundColor='aliceblue';
            grid_matrix[3][10]=0;
        }else{
            document.getElementById("grid_3_10").style.backgroundColor='black';
            grid_matrix[3][10]=-1;

        }
        
    }

}


function selection_3_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_11").style.backgroundColor=='red'){
                document.getElementById("grid_3_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_11").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=11;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_11").style.backgroundColor=='green'){
                document.getElementById("grid_3_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_11").style.backgroundColor=='black'){
            document.getElementById("grid_3_11").style.backgroundColor='aliceblue';
            grid_matrix[3][11]=0;
        }else{
            document.getElementById("grid_3_11").style.backgroundColor='black';
            grid_matrix[3][11]=-1;

        }
        
    }

}


function selection_3_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_12").style.backgroundColor=='red'){
                document.getElementById("grid_3_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_12").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=12;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_12").style.backgroundColor=='green'){
                document.getElementById("grid_3_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_12").style.backgroundColor=='black'){
            document.getElementById("grid_3_12").style.backgroundColor='aliceblue';
            grid_matrix[3][12]=0;
        }else{
            document.getElementById("grid_3_12").style.backgroundColor='black';
            grid_matrix[3][12]=-1;

        }
        
    }

}


function selection_3_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_13").style.backgroundColor=='red'){
                document.getElementById("grid_3_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_13").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=13;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_13").style.backgroundColor=='green'){
                document.getElementById("grid_3_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_13").style.backgroundColor=='black'){
            document.getElementById("grid_3_13").style.backgroundColor='aliceblue';
            grid_matrix[3][13]=0;
        }else{
            document.getElementById("grid_3_13").style.backgroundColor='black';
            grid_matrix[3][13]=-1;

        }
        
    }

}



function selection_3_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_14").style.backgroundColor=='red'){
                document.getElementById("grid_3_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_14").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=14;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_14").style.backgroundColor=='green'){
                document.getElementById("grid_3_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_14").style.backgroundColor=='black'){
            document.getElementById("grid_3_14").style.backgroundColor='aliceblue';
            grid_matrix[3][14]=0;
        }else{
            document.getElementById("grid_3_14").style.backgroundColor='black';
            grid_matrix[3][14]=-1;

        }
        
    }

}


function selection_3_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_15").style.backgroundColor=='red'){
                document.getElementById("grid_3_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_15").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=15;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_15").style.backgroundColor=='green'){
                document.getElementById("grid_3_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_15").style.backgroundColor=='black'){
            document.getElementById("grid_3_15").style.backgroundColor='aliceblue';
            grid_matrix[3][15]=0;
        }else{
            document.getElementById("grid_3_15").style.backgroundColor='black';
            grid_matrix[3][15]=-1;

        }
        
    }

}


function selection_3_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_16").style.backgroundColor=='red'){
                document.getElementById("grid_3_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_16").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=16;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_16").style.backgroundColor=='green'){
                document.getElementById("grid_3_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_16").style.backgroundColor=='black'){
            document.getElementById("grid_3_16").style.backgroundColor='aliceblue';
            grid_matrix[3][16]=0;
        }else{
            document.getElementById("grid_3_16").style.backgroundColor='black';
            grid_matrix[3][16]=-1;

        }
        
    }

}


function selection_3_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_17").style.backgroundColor=='red'){
                document.getElementById("grid_3_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_17").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=17;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_17").style.backgroundColor=='green'){
                document.getElementById("grid_3_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_17").style.backgroundColor=='black'){
            document.getElementById("grid_3_17").style.backgroundColor='aliceblue';
            grid_matrix[3][17]=0;
        }else{
            document.getElementById("grid_3_17").style.backgroundColor='black';
            grid_matrix[3][17]=-1;

        }
        
    }

}


function selection_3_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_18").style.backgroundColor=='red'){
                document.getElementById("grid_3_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_18").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=18;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_18").style.backgroundColor=='green'){
                document.getElementById("grid_3_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_18").style.backgroundColor=='black'){
            document.getElementById("grid_3_18").style.backgroundColor='aliceblue';
            grid_matrix[3][18]=0;
        }else{
            document.getElementById("grid_3_18").style.backgroundColor='black';
            grid_matrix[3][18]=-1;

        }
        
    }

}


function selection_3_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_3_19").style.backgroundColor=='red'){
                document.getElementById("grid_3_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_3_19").style.backgroundColor='red';
            start_activate=1;
            xstart=3;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_3_19").style.backgroundColor=='green'){
                document.getElementById("grid_3_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_3_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=3;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_3_19").style.backgroundColor=='black'){
            document.getElementById("grid_3_19").style.backgroundColor='aliceblue';
            grid_matrix[3][19]=0;
        }else{
            document.getElementById("grid_3_19").style.backgroundColor='black';
            grid_matrix[3][19]=-1;

        }
        
    }

}


//...............................................................................................................................................


function selection_4_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_0").style.backgroundColor=='red'){
                document.getElementById("grid_4_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_0").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_0").style.backgroundColor=='green'){
                document.getElementById("grid_4_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_4_0").style.backgroundColor=='black'){
            document.getElementById("grid_4_0").style.backgroundColor='aliceblue';
            grid_matrix[4][0]=0;
        }else{
            document.getElementById("grid_4_0").style.backgroundColor='black';
            grid_matrix[4][0]=-1;

        }
        
    }

}


function selection_4_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_1").style.backgroundColor=='red'){
                document.getElementById("grid_4_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_1").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_1").style.backgroundColor=='green'){
                document.getElementById("grid_4_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_1").style.backgroundColor=='black'){
            document.getElementById("grid_4_1").style.backgroundColor='aliceblue';
            grid_matrix[4][1]=0;
        }else{
            document.getElementById("grid_4_1").style.backgroundColor='black';
            grid_matrix[4][1]=-1;

        }
        
    }

}


function selection_4_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_2").style.backgroundColor=='red'){
                document.getElementById("grid_4_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_2").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_2").style.backgroundColor=='green'){
                document.getElementById("grid_4_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_2").style.backgroundColor=='black'){
            document.getElementById("grid_4_2").style.backgroundColor='aliceblue';
            grid_matrix[4][2]=0;
        }else{
            document.getElementById("grid_4_2").style.backgroundColor='black';
            grid_matrix[4][2]=-1;

        }
        
    }

}



function selection_4_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_3").style.backgroundColor=='red'){
                document.getElementById("grid_4_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_3").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_3").style.backgroundColor=='green'){
                document.getElementById("grid_4_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_3").style.backgroundColor=='black'){
            document.getElementById("grid_4_3").style.backgroundColor='aliceblue';
            grid_matrix[4][3]=0;
        }else{
            document.getElementById("grid_4_3").style.backgroundColor='black';
            grid_matrix[4][3]=-1;

        }
        
    }

}



function selection_4_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_4").style.backgroundColor=='red'){
                document.getElementById("grid_4_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_4").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_4").style.backgroundColor=='green'){
                document.getElementById("grid_4_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_4").style.backgroundColor=='black'){
            document.getElementById("grid_4_4").style.backgroundColor='aliceblue';
            grid_matrix[4][4]=0;
        }else{
            document.getElementById("grid_4_4").style.backgroundColor='black';
            grid_matrix[4][4]=-1;

        }
        
    }

}


function selection_4_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_5").style.backgroundColor=='red'){
                document.getElementById("grid_4_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_5").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_5").style.backgroundColor=='green'){
                document.getElementById("grid_4_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_5").style.backgroundColor=='black'){
            document.getElementById("grid_4_5").style.backgroundColor='aliceblue';
            grid_matrix[4][5]=0;
        }else{
            document.getElementById("grid_4_5").style.backgroundColor='black';
            grid_matrix[4][5]=-1;

        }
        
    }

}


function selection_4_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_6").style.backgroundColor=='red'){
                document.getElementById("grid_4_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_6").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_6").style.backgroundColor=='green'){
                document.getElementById("grid_4_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_6").style.backgroundColor=='black'){
            document.getElementById("grid_4_6").style.backgroundColor='aliceblue';
            grid_matrix[4][6]=0;
        }else{
            document.getElementById("grid_4_6").style.backgroundColor='black';
            grid_matrix[4][6]=-1;

        }
        
    }

}

function selection_4_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_7").style.backgroundColor=='red'){
                document.getElementById("grid_4_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_7").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_7").style.backgroundColor=='green'){
                document.getElementById("grid_4_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_7").style.backgroundColor=='black'){
            document.getElementById("grid_4_7").style.backgroundColor='aliceblue';
            grid_matrix[4][7]=0;
        }else{
            document.getElementById("grid_4_7").style.backgroundColor='black';
            grid_matrix[4][7]=-1;

        }
        
    }

}

function selection_4_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_8").style.backgroundColor=='red'){
                document.getElementById("grid_4_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_8").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_8").style.backgroundColor=='green'){
                document.getElementById("grid_4_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_8").style.backgroundColor=='black'){
            document.getElementById("grid_4_8").style.backgroundColor='aliceblue';
            grid_matrix[4][8]=0;
        }else{
            document.getElementById("grid_4_8").style.backgroundColor='black';
            grid_matrix[4][8]=-1;

        }
        
    }

}


function selection_4_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_9").style.backgroundColor=='red'){
                document.getElementById("grid_4_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_9").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_9").style.backgroundColor=='green'){
                document.getElementById("grid_4_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_9").style.backgroundColor=='black'){
            document.getElementById("grid_4_9").style.backgroundColor='aliceblue';
            grid_matrix[4][9]=0;
        }else{
            document.getElementById("grid_4_9").style.backgroundColor='black';
            grid_matrix[4][9]=-1;

        }
        
    }

}

function selection_4_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_10").style.backgroundColor=='red'){
                document.getElementById("grid_4_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_10").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_10").style.backgroundColor=='green'){
                document.getElementById("grid_4_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_10").style.backgroundColor=='black'){
            document.getElementById("grid_4_10").style.backgroundColor='aliceblue';
            grid_matrix[4][10]=0;
        }else{
            document.getElementById("grid_4_10").style.backgroundColor='black';
            grid_matrix[4][10]=-1;

        }
        
    }

}


function selection_4_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_11").style.backgroundColor=='red'){
                document.getElementById("grid_4_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_11").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_11").style.backgroundColor=='green'){
                document.getElementById("grid_4_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_11").style.backgroundColor=='black'){
            document.getElementById("grid_4_11").style.backgroundColor='aliceblue';
            grid_matrix[4][11]=0;
        }else{
            document.getElementById("grid_4_11").style.backgroundColor='black';
            grid_matrix[4][11]=-1;

        }
        
    }

}


function selection_4_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_12").style.backgroundColor=='red'){
                document.getElementById("grid_4_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_12").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_12").style.backgroundColor=='green'){
                document.getElementById("grid_4_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_12").style.backgroundColor=='black'){
            document.getElementById("grid_4_12").style.backgroundColor='aliceblue';
            grid_matrix[4][12]=0;
        }else{
            document.getElementById("grid_4_12").style.backgroundColor='black';
            grid_matrix[4][12]=-1;

        }
        
    }

}


function selection_4_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_13").style.backgroundColor=='red'){
                document.getElementById("grid_4_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_13").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_13").style.backgroundColor=='green'){
                document.getElementById("grid_4_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_13").style.backgroundColor=='black'){
            document.getElementById("grid_4_13").style.backgroundColor='aliceblue';
            grid_matrix[4][13]=0;
        }else{
            document.getElementById("grid_4_13").style.backgroundColor='black';
            grid_matrix[4][13]=-1;

        }
        
    }

}



function selection_4_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_14").style.backgroundColor=='red'){
                document.getElementById("grid_4_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_14").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_14").style.backgroundColor=='green'){
                document.getElementById("grid_4_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_14").style.backgroundColor=='black'){
            document.getElementById("grid_4_14").style.backgroundColor='aliceblue';
            grid_matrix[4][14]=0;
        }else{
            document.getElementById("grid_4_14").style.backgroundColor='black';
            grid_matrix[4][14]=-1;

        }
        
    }

}


function selection_4_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_15").style.backgroundColor=='red'){
                document.getElementById("grid_4_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_15").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=15;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_15").style.backgroundColor=='green'){
                document.getElementById("grid_4_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_15").style.backgroundColor=='black'){
            document.getElementById("grid_4_15").style.backgroundColor='aliceblue';
            grid_matrix[4][15]=0;
        }else{
            document.getElementById("grid_4_15").style.backgroundColor='black';
            grid_matrix[4][15]=-1

        }
        
    }

}


function selection_4_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_16").style.backgroundColor=='red'){
                document.getElementById("grid_4_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_16").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=16;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_16").style.backgroundColor=='green'){
                document.getElementById("grid_4_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_16").style.backgroundColor=='black'){
            document.getElementById("grid_4_16").style.backgroundColor='aliceblue';
            grid_matrix[4][16]=0;
        }else{
            document.getElementById("grid_4_16").style.backgroundColor='black';
            grid_matrix[4][16]=-1;

        }
        
    }

}


function selection_4_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_17").style.backgroundColor=='red'){
                document.getElementById("grid_4_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_17").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_17").style.backgroundColor=='green'){
                document.getElementById("grid_4_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_17").style.backgroundColor=='black'){
            document.getElementById("grid_4_17").style.backgroundColor='aliceblue';
            grid_matrix[4][17]=0;
        }else{
            document.getElementById("grid_4_17").style.backgroundColor='black';
            grid_matrix[4][17]=-1;

        }
        
    }

}


function selection_4_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_18").style.backgroundColor=='red'){
                document.getElementById("grid_4_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_18").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_18").style.backgroundColor=='green'){
                document.getElementById("grid_4_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_18").style.backgroundColor=='black'){
            document.getElementById("grid_4_18").style.backgroundColor='aliceblue';
            grid_matrix[4][18]=0;
        }else{
            document.getElementById("grid_4_18").style.backgroundColor='black';
            grid_matrix[4][18]=-1;

        }
        
    }

}


function selection_4_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_4_19").style.backgroundColor=='red'){
                document.getElementById("grid_4_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_4_19").style.backgroundColor='red';
            start_activate=1;
            xstart=4;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_4_19").style.backgroundColor=='green'){
                document.getElementById("grid_4_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_4_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=4;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_4_19").style.backgroundColor=='black'){
            document.getElementById("grid_4_19").style.backgroundColor='aliceblue';
            grid_matrix[4][19]=0;
        }else{
            document.getElementById("grid_4_19").style.backgroundColor='black';
            grid_matrix[4][19]=-1;

        }
        
    }

}

//.............................................................................................................................................


function selection_5_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_0").style.backgroundColor=='red'){
                document.getElementById("grid_5_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_0").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_0").style.backgroundColor=='green'){
                document.getElementById("grid_5_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_5_0").style.backgroundColor=='black'){
            document.getElementById("grid_5_0").style.backgroundColor='aliceblue';
            grid_matrix[5][0]=0;
        }else{
            document.getElementById("grid_5_0").style.backgroundColor='black';
            grid_matrix[5][0]=-1;

        }
        
    }

}


function selection_5_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_1").style.backgroundColor=='red'){
                document.getElementById("grid_5_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_1").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_1").style.backgroundColor=='green'){
                document.getElementById("grid_5_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_1").style.backgroundColor=='black'){
            document.getElementById("grid_5_1").style.backgroundColor='aliceblue';
            grid_matrix[5][1]=0;
        }else{
            document.getElementById("grid_5_1").style.backgroundColor='black';
            grid_matrix[5][1]=-1;

        }
        
    }

}


function selection_5_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_2").style.backgroundColor=='red'){
                document.getElementById("grid_5_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_2").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_2").style.backgroundColor=='green'){
                document.getElementById("grid_5_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_2").style.backgroundColor=='black'){
            document.getElementById("grid_5_2").style.backgroundColor='aliceblue';
            grid_matrix[5][2]=0;
        }else{
            document.getElementById("grid_5_2").style.backgroundColor='black';
            grid_matrix[5][2]=-1;

        }
        
    }

}



function selection_5_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_3").style.backgroundColor=='red'){
                document.getElementById("grid_5_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_3").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_3").style.backgroundColor=='green'){
                document.getElementById("grid_5_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_3").style.backgroundColor=='black'){
            document.getElementById("grid_5_3").style.backgroundColor='aliceblue';
            grid_matrix[5][3]=0;
        }else{
            document.getElementById("grid_5_3").style.backgroundColor='black';
            grid_matrix[5][3]=1;


        }
        
    }

}



function selection_5_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_4").style.backgroundColor=='red'){
                document.getElementById("grid_5_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_4").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_4").style.backgroundColor=='green'){
                document.getElementById("grid_5_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_4").style.backgroundColor=='black'){
            document.getElementById("grid_5_4").style.backgroundColor='aliceblue';
            grid_matrix[5][4]=0;
        }else{
            document.getElementById("grid_5_4").style.backgroundColor='black';
            grid_matrix[5][4]=-1;

        }
        
    }

}


function selection_5_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_5").style.backgroundColor=='red'){
                document.getElementById("grid_5_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_5").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_5").style.backgroundColor=='green'){
                document.getElementById("grid_5_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_5").style.backgroundColor=='black'){
            document.getElementById("grid_5_5").style.backgroundColor='aliceblue';
            grid_matrix[5][5]=0;
        }else{
            document.getElementById("grid_5_5").style.backgroundColor='black';
            grid_matrix[5][5]=-1;

        }
        
    }

}


function selection_5_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_6").style.backgroundColor=='red'){
                document.getElementById("grid_5_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_6").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_6").style.backgroundColor=='green'){
                document.getElementById("grid_5_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_6").style.backgroundColor=='black'){
            document.getElementById("grid_5_6").style.backgroundColor='aliceblue';
            grid_matrix[5][6]=0;
        }else{
            document.getElementById("grid_5_6").style.backgroundColor='black';
            grid_matrix[5][6]=-1;

        }
        
    }

}

function selection_5_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_7").style.backgroundColor=='red'){
                document.getElementById("grid_5_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_7").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_7").style.backgroundColor=='green'){
                document.getElementById("grid_5_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_7").style.backgroundColor=='black'){
            document.getElementById("grid_5_7").style.backgroundColor='aliceblue';
            grid_matrix[5][7]=0;
        }else{
            document.getElementById("grid_5_7").style.backgroundColor='black';
            grid_matrix[5][7]=-1;

        }
        
    }

}

function selection_5_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_8").style.backgroundColor=='red'){
                document.getElementById("grid_5_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_8").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_8").style.backgroundColor=='green'){
                document.getElementById("grid_5_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_8").style.backgroundColor=='black'){
            document.getElementById("grid_5_8").style.backgroundColor='aliceblue';
            grid_matrix[5][8]=0;
        }else{
            document.getElementById("grid_5_8").style.backgroundColor='black';
            grid_matrix[5][8]=-1;

        }
        
    }

}


function selection_5_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_9").style.backgroundColor=='red'){
                document.getElementById("grid_5_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_9").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_9").style.backgroundColor=='green'){
                document.getElementById("grid_5_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_9").style.backgroundColor=='black'){
            document.getElementById("grid_5_9").style.backgroundColor='aliceblue';
            grid_matrix[5][9]=0;
        }else{
            document.getElementById("grid_5_9").style.backgroundColor='black';
            grid_matrix[5][9]=-1;

        }
        
    }

}

function selection_5_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_10").style.backgroundColor=='red'){
                document.getElementById("grid_5_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_10").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_10").style.backgroundColor=='green'){
                document.getElementById("grid_5_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;  

            }

        }else{
            document.getElementById("grid_5_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_10").style.backgroundColor=='black'){
            document.getElementById("grid_5_10").style.backgroundColor='aliceblue';
            grid_matrix[5][10]=0;
        }else{
            document.getElementById("grid_5_10").style.backgroundColor='black';
            grid_matrix[5][10]=-1;

        }
        
    }

}


function selection_5_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_11").style.backgroundColor=='red'){
                document.getElementById("grid_5_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_11").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_11").style.backgroundColor=='green'){
                document.getElementById("grid_5_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_11").style.backgroundColor=='black'){
            document.getElementById("grid_5_11").style.backgroundColor='aliceblue';
            grid_matrix[5][11]=0;
        }else{
            document.getElementById("grid_5_11").style.backgroundColor='black';
            grid_matrix[5][11]=-1;

        }
        
    }

}


function selection_5_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_12").style.backgroundColor=='red'){
                document.getElementById("grid_5_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_12").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_12").style.backgroundColor=='green'){
                document.getElementById("grid_5_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_12").style.backgroundColor=='black'){
            document.getElementById("grid_5_12").style.backgroundColor='aliceblue';
            grid_matrix[5][12]=0;
        }else{
            document.getElementById("grid_5_12").style.backgroundColor='black';
            grid_matrix[5][12]=-1;

        }
        
    }

}


function selection_5_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_13").style.backgroundColor=='red'){
                document.getElementById("grid_5_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=5;
                ystart=5;

            }

        }else{
            document.getElementById("grid_5_13").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_13").style.backgroundColor=='green'){
                document.getElementById("grid_5_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_13").style.backgroundColor=='black'){
            document.getElementById("grid_5_13").style.backgroundColor='aliceblue';
            grid_matrix[5][13]=0;
        }else{
            document.getElementById("grid_5_13").style.backgroundColor='black';
            grid_matrix[5][13]=-1;

        }
        
    }

}



function selection_5_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_14").style.backgroundColor=='red'){
                document.getElementById("grid_5_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_14").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_14").style.backgroundColor=='green'){
                document.getElementById("grid_5_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_14").style.backgroundColor=='black'){
            document.getElementById("grid_5_14").style.backgroundColor='aliceblue';
            grid_matrix[5][14]=0;
        }else{
            document.getElementById("grid_5_14").style.backgroundColor='black';
            grid_matrix[5][14]=-1;

        }
        
    }

}


function selection_5_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_15").style.backgroundColor=='red'){
                document.getElementById("grid_5_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_15").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_15").style.backgroundColor=='green'){
                document.getElementById("grid_5_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_15").style.backgroundColor=='black'){
            document.getElementById("grid_5_15").style.backgroundColor='aliceblue';
            grid_matrix[5][15]=0;
        }else{
            document.getElementById("grid_5_15").style.backgroundColor='black';
            grid_matrix[5][15]=-1;

        }
        
    }

}


function selection_5_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_16").style.backgroundColor=='red'){
                document.getElementById("grid_5_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_16").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_16").style.backgroundColor=='green'){
                document.getElementById("grid_5_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_16").style.backgroundColor=='black'){
            document.getElementById("grid_5_16").style.backgroundColor='aliceblue';
            grid_matrix[5][16]=0;
        }else{
            document.getElementById("grid_5_16").style.backgroundColor='black';
            grid_matrix[5][16]=-1;

        }
        
    }

}


function selection_5_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_17").style.backgroundColor=='red'){
                document.getElementById("grid_5_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_17").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_17").style.backgroundColor=='green'){
                document.getElementById("grid_5_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_17").style.backgroundColor=='black'){
            document.getElementById("grid_5_17").style.backgroundColor='aliceblue';
            grid_matrix[5][17]=0;
        }else{
            document.getElementById("grid_5_17").style.backgroundColor='black';
            grid_matrix[5][17]=-1;

        }
        
    }

}


function selection_5_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_18").style.backgroundColor=='red'){
                document.getElementById("grid_5_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_18").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_18").style.backgroundColor=='green'){
                document.getElementById("grid_5_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_18").style.backgroundColor=='black'){
            document.getElementById("grid_5_18").style.backgroundColor='aliceblue';
            grid_matrix[5][18]=0;
        }else{
            document.getElementById("grid_5_18").style.backgroundColor='black';
            grid_matrix[5][18]=-1;

        }
        
    }

}


function selection_5_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_5_19").style.backgroundColor=='red'){
                document.getElementById("grid_5_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_5_19").style.backgroundColor='red';
            start_activate=1;
            xstart=5;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_5_19").style.backgroundColor=='green'){
                document.getElementById("grid_5_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_5_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=5;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_5_19").style.backgroundColor=='black'){
            document.getElementById("grid_5_19").style.backgroundColor='aliceblue';
            grid_matrix[5][19]=0;
        }else{
            document.getElementById("grid_5_19").style.backgroundColor='black';
            grid_matrix[5][19]=-1;

        }
        
    }

}


//..............................................................................................................................................


function selection_6_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_0").style.backgroundColor=='red'){
                document.getElementById("grid_6_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_0").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_0").style.backgroundColor=='green'){
                document.getElementById("grid_6_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_6_0").style.backgroundColor=='black'){
            document.getElementById("grid_6_0").style.backgroundColor='aliceblue';
            grid_matrix[6][0]=0;
        }else{
            document.getElementById("grid_6_0").style.backgroundColor='black';
            grid_matrix[6][0]=-1;

        }
        
    }

}


function selection_6_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_1").style.backgroundColor=='red'){
                document.getElementById("grid_6_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_1").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_1").style.backgroundColor=='green'){
                document.getElementById("grid_6_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_1").style.backgroundColor=='black'){
            document.getElementById("grid_6_1").style.backgroundColor='aliceblue';
            grid_matrix[6][1]=0;
        }else{
            document.getElementById("grid_6_1").style.backgroundColor='black';
            grid_matrix[6][1]=-1;

        }
        
    }

}


function selection_6_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_2").style.backgroundColor=='red'){
                document.getElementById("grid_6_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_2").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_2").style.backgroundColor=='green'){
                document.getElementById("grid_6_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_2").style.backgroundColor=='black'){
            document.getElementById("grid_6_2").style.backgroundColor='aliceblue';
            grid_matrix[6][2]=0;
        }else{
            document.getElementById("grid_6_2").style.backgroundColor='black';
            grid_matrix[6][2]=-1;

        }
        
    }

}



function selection_6_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_3").style.backgroundColor=='red'){
                document.getElementById("grid_6_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_3").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_3").style.backgroundColor=='green'){
                document.getElementById("grid_6_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_3").style.backgroundColor=='black'){
            document.getElementById("grid_6_3").style.backgroundColor='aliceblue';
            grid_matrix[6][3]=0;
        }else{
            document.getElementById("grid_6_3").style.backgroundColor='black';
            grid_matrix[6][3]=-1;

        }
        
    }

}



function selection_6_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_4").style.backgroundColor=='red'){
                document.getElementById("grid_6_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_4").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_4").style.backgroundColor=='green'){
                document.getElementById("grid_6_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_4").style.backgroundColor=='black'){
            document.getElementById("grid_6_4").style.backgroundColor='aliceblue';
            grid_matrix[6][4]=0;
        }else{
            document.getElementById("grid_6_4").style.backgroundColor='black';
            grid_matrix[6][4]=-1

        }
        
    }

}


function selection_6_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_5").style.backgroundColor=='red'){
                document.getElementById("grid_6_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_5").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_5").style.backgroundColor=='green'){
                document.getElementById("grid_6_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_5").style.backgroundColor=='black'){
            document.getElementById("grid_6_5").style.backgroundColor='aliceblue';
            grid_matrix[6][5]=0;
        }else{
            document.getElementById("grid_6_5").style.backgroundColor='black';
            grid_matrix[6][5]=-1;

        }
        
    }

}


function selection_6_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_6").style.backgroundColor=='red'){
                document.getElementById("grid_6_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_6").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_6").style.backgroundColor=='green'){
                document.getElementById("grid_6_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_6").style.backgroundColor=='black'){
            document.getElementById("grid_6_6").style.backgroundColor='aliceblue';
            grid_matrix[6][6]=0;
        }else{
            document.getElementById("grid_6_6").style.backgroundColor='black';
            grid_matrix[6][6]=-1;

        }
        
    }

}

function selection_6_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_7").style.backgroundColor=='red'){
                document.getElementById("grid_6_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_7").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_7").style.backgroundColor=='green'){
                document.getElementById("grid_6_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_7").style.backgroundColor=='black'){
            document.getElementById("grid_6_7").style.backgroundColor='aliceblue';
            grid_matrix[6][7]=0;
        }else{
            document.getElementById("grid_6_7").style.backgroundColor='black';
            grid_matrix[6][7]=-1;


        }
        
    }

}

function selection_6_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_8").style.backgroundColor=='red'){
                document.getElementById("grid_6_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_8").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_8").style.backgroundColor=='green'){
                document.getElementById("grid_6_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_8").style.backgroundColor=='black'){
            document.getElementById("grid_6_8").style.backgroundColor='aliceblue';
            grid_matrix[6][8]=0;
        }else{
            document.getElementById("grid_6_8").style.backgroundColor='black';
            grid_matrix[6][8]=-1;

        }
        
    }

}


function selection_6_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_9").style.backgroundColor=='red'){
                document.getElementById("grid_6_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_9").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_9").style.backgroundColor=='green'){
                document.getElementById("grid_6_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_9").style.backgroundColor=='black'){
            document.getElementById("grid_6_9").style.backgroundColor='aliceblue';
            grid_matrix[6][9]=0;
        }else{
            document.getElementById("grid_6_9").style.backgroundColor='black';
            grid_matrix[6][9]=-1;

        }
        
    }

}

function selection_6_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_10").style.backgroundColor=='red'){
                document.getElementById("grid_6_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_10").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_10").style.backgroundColor=='green'){
                document.getElementById("grid_6_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_10").style.backgroundColor=='black'){
            document.getElementById("grid_6_10").style.backgroundColor='aliceblue';
            grid_matrix[6][10]=0;
        }else{
            document.getElementById("grid_6_10").style.backgroundColor='black';
            grid_matrix[6][10]=-1;

        }
        
    }

}


function selection_6_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_11").style.backgroundColor=='red'){
                document.getElementById("grid_6_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_11").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_11").style.backgroundColor=='green'){
                document.getElementById("grid_6_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_11").style.backgroundColor=='black'){
            document.getElementById("grid_6_11").style.backgroundColor='aliceblue';
            grid_matrix[6][11]=0;
        }else{
            document.getElementById("grid_6_11").style.backgroundColor='black';
            grid_matrix[6][11]=-1;

        }
        
    }

}


function selection_6_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_12").style.backgroundColor=='red'){
                document.getElementById("grid_6_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_12").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_12").style.backgroundColor=='green'){
                document.getElementById("grid_6_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_12").style.backgroundColor=='black'){
            document.getElementById("grid_6_12").style.backgroundColor='aliceblue';
            grid_matrix[6][12]=0;
        }else{
            document.getElementById("grid_6_12").style.backgroundColor='black';
            grid_matrix[6][12]=-1;

        }
        
    }

}


function selection_6_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_13").style.backgroundColor=='red'){
                document.getElementById("grid_6_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_13").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_13").style.backgroundColor=='green'){
                document.getElementById("grid_6_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_13").style.backgroundColor=='black'){
            document.getElementById("grid_6_13").style.backgroundColor='aliceblue';
            grid_matrix[6][13]=0;
        }else{
            document.getElementById("grid_6_13").style.backgroundColor='black';
            grid_matrix[6][13]=-1;

        }
        
    }

}



function selection_6_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_14").style.backgroundColor=='red'){
                document.getElementById("grid_6_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_14").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_14").style.backgroundColor=='green'){
                document.getElementById("grid_6_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_14").style.backgroundColor=='black'){
            document.getElementById("grid_6_14").style.backgroundColor='aliceblue';
            grid_matrix[6][14]=0;
        }else{
            document.getElementById("grid_6_14").style.backgroundColor='black';
            grid_matrix[6][14]=-1;

        }
        
    }

}


function selection_6_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_15").style.backgroundColor=='red'){
                document.getElementById("grid_6_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_15").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_15").style.backgroundColor=='green'){
                document.getElementById("grid_6_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_15").style.backgroundColor=='black'){
            document.getElementById("grid_6_15").style.backgroundColor='aliceblue';
            grid_matrix[6][15]=0;
        }else{
            document.getElementById("grid_6_15").style.backgroundColor='black';
            grid_matrix[6][15]=-1;

        }
        
    }

}


function selection_6_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_16").style.backgroundColor=='red'){
                document.getElementById("grid_6_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_16").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_16").style.backgroundColor=='green'){
                document.getElementById("grid_6_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_16").style.backgroundColor=='black'){
            document.getElementById("grid_6_16").style.backgroundColor='aliceblue';
            grid_matrix[6][16]=0;
        }else{
            document.getElementById("grid_6_16").style.backgroundColor='black';
            grid_matrix[6][16]=-1;

        }
        
    }

}


function selection_6_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_17").style.backgroundColor=='red'){
                document.getElementById("grid_6_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_17").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_17").style.backgroundColor=='green'){
                document.getElementById("grid_6_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_17").style.backgroundColor=='black'){
            document.getElementById("grid_6_17").style.backgroundColor='aliceblue';
            grid_matrix[6][17]=0;
        }else{
            document.getElementById("grid_6_17").style.backgroundColor='black';
            grid_matrix[6][17]=-1;

        }
        
    }

}


function selection_6_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_18").style.backgroundColor=='red'){
                document.getElementById("grid_6_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_18").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_18").style.backgroundColor=='green'){
                document.getElementById("grid_6_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_18").style.backgroundColor=='black'){
            document.getElementById("grid_6_18").style.backgroundColor='aliceblue';
            grid_matrix[6][18]=0;
        }else{
            document.getElementById("grid_6_18").style.backgroundColor='black';
            grid_matrix[6][18]=-1;

        }
        
    }

}


function selection_6_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_6_19").style.backgroundColor=='red'){
                document.getElementById("grid_6_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_6_19").style.backgroundColor='red';
            start_activate=1;
            xstart=6;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_6_19").style.backgroundColor=='green'){
                document.getElementById("grid_6_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_6_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=6;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_6_19").style.backgroundColor=='black'){
            document.getElementById("grid_6_19").style.backgroundColor='aliceblue';
            grid_matrix[6][19]=0;
        }else{
            document.getElementById("grid_6_19").style.backgroundColor='black';
            grid_matrix[6][19]=-1;

        }
        
    }

}


//............................................................................................................................................


function selection_7_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_0").style.backgroundColor=='red'){
                document.getElementById("grid_7_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_0").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_0").style.backgroundColor=='green'){
                document.getElementById("grid_7_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_7_0").style.backgroundColor=='black'){
            document.getElementById("grid_7_0").style.backgroundColor='aliceblue';
            grid_matrix[7][0]=0;
        }else{
            document.getElementById("grid_7_0").style.backgroundColor='black';
            grid_matrix[7][0]=-1;

        }
        
    }

}


function selection_7_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_1").style.backgroundColor=='red'){
                document.getElementById("grid_7_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_1").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_1").style.backgroundColor=='green'){
                document.getElementById("grid_7_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_1").style.backgroundColor=='black'){
            document.getElementById("grid_7_1").style.backgroundColor='aliceblue';
            grid_matrix[7][1]=0;
        }else{
            document.getElementById("grid_7_1").style.backgroundColor='black';
            grid_matrix[7][1]=-1;

        }
        
    }

}


function selection_7_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_2").style.backgroundColor=='red'){
                document.getElementById("grid_7_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_2").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_2").style.backgroundColor=='green'){
                document.getElementById("grid_7_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_2").style.backgroundColor=='black'){
            document.getElementById("grid_7_2").style.backgroundColor='aliceblue';
            grid_matrix[7][2]=0;
        }else{
            document.getElementById("grid_7_2").style.backgroundColor='black';
            grid_matrix[7][2]=-1;

        }
        
    }

}



function selection_7_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_3").style.backgroundColor=='red'){
                document.getElementById("grid_7_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_3").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_3").style.backgroundColor=='green'){
                document.getElementById("grid_7_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_3").style.backgroundColor=='black'){
            document.getElementById("grid_7_3").style.backgroundColor='aliceblue';
            grid_matrix[7][3]=0;
        }else{
            document.getElementById("grid_7_3").style.backgroundColor='black';
            grid_matrix[7][3]=-1;

        }
        
    }

}



function selection_7_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_4").style.backgroundColor=='red'){
                document.getElementById("grid_7_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_4").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_4").style.backgroundColor=='green'){
                document.getElementById("grid_7_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_4").style.backgroundColor=='black'){
            document.getElementById("grid_7_4").style.backgroundColor='aliceblue';
            grid_matrix[7][4]=0;
        }else{
            document.getElementById("grid_7_4").style.backgroundColor='black';
            grid_matrix[7][4]=-1;

        }
        
    }

}


function selection_7_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_5").style.backgroundColor=='red'){
                document.getElementById("grid_7_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_5").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_5").style.backgroundColor=='green'){
                document.getElementById("grid_7_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_5").style.backgroundColor=='black'){
            document.getElementById("grid_7_5").style.backgroundColor='aliceblue';
            grid_matrix[7][5]=0;
        }else{
            document.getElementById("grid_7_5").style.backgroundColor='black';
            grid_matrix[7][5]=-1;

        }
        
    }

}


function selection_7_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_6").style.backgroundColor=='red'){
                document.getElementById("grid_7_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_6").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_6").style.backgroundColor=='green'){
                document.getElementById("grid_7_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_6").style.backgroundColor=='black'){
            document.getElementById("grid_7_6").style.backgroundColor='aliceblue';
            grid_matrix[7][6]=0;
        }else{
            document.getElementById("grid_7_6").style.backgroundColor='black';
            grid_matrix[7][6]=-1;

        }
        
    }

}

function selection_7_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_7").style.backgroundColor=='red'){
                document.getElementById("grid_7_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_7").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_7").style.backgroundColor=='green'){
                document.getElementById("grid_7_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_7").style.backgroundColor=='black'){
            document.getElementById("grid_7_7").style.backgroundColor='aliceblue';
            grid_matrix[7][7]=0;
        }else{
            document.getElementById("grid_7_7").style.backgroundColor='black';
            grid_matrix[7][7]=-1;

        }
        
    }

}

function selection_7_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_8").style.backgroundColor=='red'){
                document.getElementById("grid_7_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_8").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_8").style.backgroundColor=='green'){
                document.getElementById("grid_7_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_8").style.backgroundColor=='black'){
            document.getElementById("grid_7_8").style.backgroundColor='aliceblue';
            grid_matrix[7][8]=0;
        }else{
            document.getElementById("grid_7_8").style.backgroundColor='black';
            grid_matrix[7][8]=-1;

        }
        
    }

}


function selection_7_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_9").style.backgroundColor=='red'){
                document.getElementById("grid_7_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_9").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_9").style.backgroundColor=='green'){
                document.getElementById("grid_7_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_9").style.backgroundColor=='black'){
            document.getElementById("grid_7_9").style.backgroundColor='aliceblue';
            grid_matrix[7][9]=0;
        }else{
            document.getElementById("grid_7_9").style.backgroundColor='black';
            grid_matrix[7][9]=-1;

        }
        
    }

}

function selection_7_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_10").style.backgroundColor=='red'){
                document.getElementById("grid_7_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_10").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_10").style.backgroundColor=='green'){
                document.getElementById("grid_7_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_10").style.backgroundColor=='black'){
            document.getElementById("grid_7_10").style.backgroundColor='aliceblue';
            grid_matrix[7][10]=0;
        }else{
            document.getElementById("grid_7_10").style.backgroundColor='black';
            grid_matrix[7][10]=-1;

        }
        
    }

}


function selection_7_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_11").style.backgroundColor=='red'){
                document.getElementById("grid_7_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_11").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_11").style.backgroundColor=='green'){
                document.getElementById("grid_7_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_11").style.backgroundColor=='black'){
            document.getElementById("grid_7_11").style.backgroundColor='aliceblue';
            grid_matrix[7][11]=0;
        }else{
            document.getElementById("grid_7_11").style.backgroundColor='black';
            grid_matrix[7][11]=-1;

        }
        
    }

}


function selection_7_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_12").style.backgroundColor=='red'){
                document.getElementById("grid_7_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_12").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_12").style.backgroundColor=='green'){
                document.getElementById("grid_7_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_12").style.backgroundColor=='black'){
            document.getElementById("grid_7_12").style.backgroundColor='aliceblue';
            grid_matrix[7][12]=0;
        }else{
            document.getElementById("grid_7_12").style.backgroundColor='black';
            grid_matrix[7][12]=-1;

        }
        
    }

}


function selection_7_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_13").style.backgroundColor=='red'){
                document.getElementById("grid_7_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_13").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_13").style.backgroundColor=='green'){
                document.getElementById("grid_7_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_13").style.backgroundColor=='black'){
            document.getElementById("grid_7_13").style.backgroundColor='aliceblue';
            grid_matrix[7][13]=0;
        }else{
            document.getElementById("grid_7_13").style.backgroundColor='black';
            grid_matrix[7][13]=-1;

        }
        
    }

}



function selection_7_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_14").style.backgroundColor=='red'){
                document.getElementById("grid_7_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_14").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_14").style.backgroundColor=='green'){
                document.getElementById("grid_7_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_14").style.backgroundColor=='black'){
            document.getElementById("grid_7_14").style.backgroundColor='aliceblue';
            grid_matrix[7][14]=0;
        }else{
            document.getElementById("grid_7_14").style.backgroundColor='black';
            grid_matrix[7][14]=-1;

        }
        
    }

}


function selection_7_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_15").style.backgroundColor=='red'){
                document.getElementById("grid_7_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_15").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_15").style.backgroundColor=='green'){
                document.getElementById("grid_7_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_15").style.backgroundColor=='black'){
            document.getElementById("grid_7_15").style.backgroundColor='aliceblue';
            grid_matrix[7][15]=0;
        }else{
            document.getElementById("grid_7_15").style.backgroundColor='black';
            grid_matrix[7][15]=-1;

        }
        
    }

}


function selection_7_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_16").style.backgroundColor=='red'){
                document.getElementById("grid_7_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_16").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_16").style.backgroundColor=='green'){
                document.getElementById("grid_7_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_16").style.backgroundColor=='black'){
            document.getElementById("grid_7_16").style.backgroundColor='aliceblue';
            grid_matrix[7][16]=0;
        }else{
            document.getElementById("grid_7_16").style.backgroundColor='black';
            grid_matrix[7][16]=-1;

        }
        
    }

}


function selection_7_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_17").style.backgroundColor=='red'){
                document.getElementById("grid_7_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_17").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=17;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_17").style.backgroundColor=='green'){
                document.getElementById("grid_7_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_17").style.backgroundColor=='black'){
            document.getElementById("grid_7_17").style.backgroundColor='aliceblue';
            grid_matrix[7][17]=0;
        }else{
            document.getElementById("grid_7_17").style.backgroundColor='black';
            grid_matrix[7][17]=-1;

        }
        
    }

}


function selection_7_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_18").style.backgroundColor=='red'){
                document.getElementById("grid_7_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_18").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=18;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_18").style.backgroundColor=='green'){
                document.getElementById("grid_7_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_18").style.backgroundColor=='black'){
            document.getElementById("grid_7_18").style.backgroundColor='aliceblue';
            grid_matrix[7][18]=0;
        }else{
            document.getElementById("grid_7_18").style.backgroundColor='black';
            grid_matrix[7][18]=0;

        }
        
    }

}


function selection_7_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_7_19").style.backgroundColor=='red'){
                document.getElementById("grid_7_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_7_19").style.backgroundColor='red';
            start_activate=1;
            xstart=7;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_7_19").style.backgroundColor=='green'){
                document.getElementById("grid_7_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_7_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=7;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_7_19").style.backgroundColor=='black'){
            document.getElementById("grid_7_19").style.backgroundColor='aliceblue';
            grid_matrix[7][19]=0;
        }else{
            document.getElementById("grid_7_19").style.backgroundColor='black';
            grid_matrix[7][19]=-1;

        }
        
    }

}


//........................................................................................................................................


function selection_8_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_0").style.backgroundColor=='red'){
                document.getElementById("grid_8_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_0").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=0;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_0").style.backgroundColor=='green'){
                document.getElementById("grid_8_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtraget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_8_0").style.backgroundColor=='black'){
            document.getElementById("grid_8_0").style.backgroundColor='aliceblue';
            grid_matrix[8][0]=0;
        }else{
            document.getElementById("grid_8_0").style.backgroundColor='black';
            grid_matrix[8][0]=-1;

        }
        
    }

}


function selection_8_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_1").style.backgroundColor=='red'){
                document.getElementById("grid_8_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_1").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_1").style.backgroundColor=='green'){
                document.getElementById("grid_8_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_1").style.backgroundColor=='black'){
            document.getElementById("grid_8_1").style.backgroundColor='aliceblue';
            grid_matrix[8][1]=0;
        }else{
            document.getElementById("grid_8_1").style.backgroundColor='black';
            grid_matrix[8][1]=-1;

        }
        
    }

}


function selection_8_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_2").style.backgroundColor=='red'){
                document.getElementById("grid_8_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_2").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=2;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_2").style.backgroundColor=='green'){
                document.getElementById("grid_8_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_2").style.backgroundColor=='black'){
            document.getElementById("grid_8_2").style.backgroundColor='aliceblue';
            grid_matrix[8][2]=0;
        }else{
            document.getElementById("grid_8_2").style.backgroundColor='black';
            grid_matrix[8][2]=-1;

        }
        
    }

}



function selection_8_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_3").style.backgroundColor=='red'){
                document.getElementById("grid_8_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_3").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=3;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_3").style.backgroundColor=='green'){
                document.getElementById("grid_8_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_3").style.backgroundColor=='black'){
            document.getElementById("grid_8_3").style.backgroundColor='aliceblue';
            grid_matrix[8][3]=0;
        }else{
            document.getElementById("grid_8_3").style.backgroundColor='black';
            grid_matrix[8][3]=-1;

        }
        
    }

}



function selection_8_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_4").style.backgroundColor=='red'){
                document.getElementById("grid_8_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_4").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=4;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_4").style.backgroundColor=='green'){
                document.getElementById("grid_8_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_4").style.backgroundColor=='black'){
            document.getElementById("grid_8_4").style.backgroundColor='aliceblue';
            grid_matrix[8][4]=0;
        }else{
            document.getElementById("grid_8_4").style.backgroundColor='black';
            grid_matrix[8][4]=-1;

        }
        
    }

}


function selection_8_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_5").style.backgroundColor=='red'){
                document.getElementById("grid_8_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_5").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=5;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_5").style.backgroundColor=='green'){
                document.getElementById("grid_8_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_5").style.backgroundColor=='black'){
            document.getElementById("grid_8_5").style.backgroundColor='aliceblue';
            grid_matrix[8][5]=0;
        }else{
            document.getElementById("grid_8_5").style.backgroundColor='black';
            grid_matrix[8][5]=-1;

        }
        
    }

}


function selection_8_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_6").style.backgroundColor=='red'){
                document.getElementById("grid_8_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_6").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=6;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_6").style.backgroundColor=='green'){
                document.getElementById("grid_8_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_6").style.backgroundColor=='black'){
            document.getElementById("grid_8_6").style.backgroundColor='aliceblue';
            grid_matrix[8][6]=0;
        }else{
            document.getElementById("grid_8_6").style.backgroundColor='black';
            grid_matrix[8][6]=-1;

        }
        
    }

}

function selection_8_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_7").style.backgroundColor=='red'){
                document.getElementById("grid_8_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_7").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=7;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_7").style.backgroundColor=='green'){
                document.getElementById("grid_8_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_7").style.backgroundColor=='black'){
            document.getElementById("grid_8_7").style.backgroundColor='aliceblue';
            grid_matrix[8][7]=0;
        }else{
            document.getElementById("grid_8_7").style.backgroundColor='black';
            grid_matrix[8][7]=-1;

        }
        
    }

}

function selection_8_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_8").style.backgroundColor=='red'){
                document.getElementById("grid_8_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_8").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=8;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_8").style.backgroundColor=='green'){
                document.getElementById("grid_8_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_8").style.backgroundColor=='black'){
            document.getElementById("grid_8_8").style.backgroundColor='aliceblue';
            grid_matrix[8][8]=0;
        }else{
            document.getElementById("grid_8_8").style.backgroundColor='black';
            grid_matrix[8][8]=-1;

        }
        
    }

}


function selection_8_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_9").style.backgroundColor=='red'){
                document.getElementById("grid_8_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_9").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=9;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_9").style.backgroundColor=='green'){
                document.getElementById("grid_8_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_9").style.backgroundColor=='black'){
            document.getElementById("grid_8_9").style.backgroundColor='aliceblue';
            grid_matrix[8][9]=0;
        }else{
            document.getElementById("grid_8_9").style.backgroundColor='black';
            grid_matrix[8][9]=-1;

        }
        
    }

}

function selection_8_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_10").style.backgroundColor=='red'){
                document.getElementById("grid_8_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_10").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=10;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_10").style.backgroundColor=='green'){
                document.getElementById("grid_8_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_10").style.backgroundColor=='black'){
            document.getElementById("grid_8_10").style.backgroundColor='aliceblue';
            grid_matrix[8][10]=0;
        }else{
            document.getElementById("grid_8_10").style.backgroundColor='black';
            grid_matrix[8][10]=-1;

        }
        
    }

}


function selection_8_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_11").style.backgroundColor=='red'){
                document.getElementById("grid_8_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_11").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=11;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_11").style.backgroundColor=='green'){
                document.getElementById("grid_8_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_11").style.backgroundColor=='black'){
            document.getElementById("grid_8_11").style.backgroundColor='aliceblue';
            grid_matrix[8][11]=0;
        }else{
            document.getElementById("grid_8_11").style.backgroundColor='black';
            grid_matrix[8][11]=-1;

        }
        
    }

}


function selection_8_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_12").style.backgroundColor=='red'){
                document.getElementById("grid_8_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_12").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=12;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_12").style.backgroundColor=='green'){
                document.getElementById("grid_8_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_12").style.backgroundColor=='black'){
            document.getElementById("grid_8_12").style.backgroundColor='aliceblue';
            grid_matrix[8][12]=0;
        }else{
            document.getElementById("grid_8_12").style.backgroundColor='black';
            grid_matrix[8][12]=-1;

        }
        
    }

}


function selection_8_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_13").style.backgroundColor=='red'){
                document.getElementById("grid_8_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_13").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=13;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_13").style.backgroundColor=='green'){
                document.getElementById("grid_8_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_13").style.backgroundColor=='black'){
            document.getElementById("grid_8_13").style.backgroundColor='aliceblue';
            grid_matrix[8][13]=0;
        }else{
            document.getElementById("grid_8_13").style.backgroundColor='black';
            grid_matrix[8][13]=-1;

        }
        
    }

}



function selection_8_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_14").style.backgroundColor=='red'){
                document.getElementById("grid_8_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_14").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=14;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_14").style.backgroundColor=='green'){
                document.getElementById("grid_8_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_14").style.backgroundColor=='black'){
            document.getElementById("grid_8_14").style.backgroundColor='aliceblue';
            grid_matrix[8][14]=0;
        }else{
            document.getElementById("grid_8_14").style.backgroundColor='black';
            grid_matrix[8][14]=-1;

        }
        
    }

}


function selection_8_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_15").style.backgroundColor=='red'){
                document.getElementById("grid_8_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_15").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=15;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_15").style.backgroundColor=='green'){
                document.getElementById("grid_8_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_15").style.backgroundColor=='black'){
            document.getElementById("grid_8_15").style.backgroundColor='aliceblue';
            grid_matrix[8][15]=0;
        }else{
            document.getElementById("grid_8_15").style.backgroundColor='black';
            grid_matrix[8][15]=-1;

        }
        
    }

}


function selection_8_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_16").style.backgroundColor=='red'){
                document.getElementById("grid_8_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_16").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=16;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_16").style.backgroundColor=='green'){
                document.getElementById("grid_8_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_16").style.backgroundColor=='black'){
            document.getElementById("grid_8_16").style.backgroundColor='aliceblue';
            grid_matrix[8][16]=0;
        }else{
            document.getElementById("grid_8_16").style.backgroundColor='black';
            grid_matrix[8][16]=-1;

        }
        
    }

}


function selection_8_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_17").style.backgroundColor=='red'){
                document.getElementById("grid_8_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_17").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=17;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_17").style.backgroundColor=='green'){
                document.getElementById("grid_8_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_17").style.backgroundColor=='black'){
            document.getElementById("grid_8_17").style.backgroundColor='aliceblue';
            grid_matrix[8][17]=0;
        }else{
            document.getElementById("grid_8_17").style.backgroundColor='black';
            grid_matrix[8][17]=-1;

        }
        
    }

}


function selection_8_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_18").style.backgroundColor=='red'){
                document.getElementById("grid_8_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_18").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=18;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_18").style.backgroundColor=='green'){
                document.getElementById("grid_8_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtraget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_18").style.backgroundColor=='black'){
            document.getElementById("grid_8_18").style.backgroundColor='aliceblue';
            grid_matrix[8][18]=0;
        }else{
            document.getElementById("grid_8_18").style.backgroundColor='black';
            grid_matrix[8][18]=-1;

        }
        
    }

}


function selection_8_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_8_19").style.backgroundColor=='red'){
                document.getElementById("grid_8_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_8_19").style.backgroundColor='red';
            start_activate=1;
            xstart=8;
            ystart=19;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_8_19").style.backgroundColor=='green'){
                document.getElementById("grid_8_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_8_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=8;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_8_19").style.backgroundColor=='black'){
            document.getElementById("grid_8_19").style.backgroundColor='aliceblue';
            grid_matrix[8][19]=0;
        }else{
            document.getElementById("grid_8_19").style.backgroundColor='black';
            grid_matrix[8][19]=-1;

        }
        
    }

}


//...............................................................................................................................................


function selection_9_0(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_0").style.backgroundColor=='red'){
                document.getElementById("grid_9_0").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_0").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=0;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_0").style.backgroundColor=='green'){
                document.getElementById("grid_9_0").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_0").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=0;


        }

        
    }

    if (select_black){
        if(document.getElementById("grid_9_0").style.backgroundColor=='black'){
            document.getElementById("grid_9_0").style.backgroundColor='aliceblue';
            grid_matrix[9][0]=0;
        }else{
            document.getElementById("grid_9_0").style.backgroundColor='black';
            grid_matrix[9][0]=-1;

        }
        
    }

}


function selection_9_1(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_1").style.backgroundColor=='red'){
                document.getElementById("grid_9_1").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_1").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=1;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_1").style.backgroundColor=='green'){
                document.getElementById("grid_9_1").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_1").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=1;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_1").style.backgroundColor=='black'){
            document.getElementById("grid_9_1").style.backgroundColor='aliceblue';
            grid_matrix[9][1]=0;
        }else{
            document.getElementById("grid_9_1").style.backgroundColor='black';
            grid_matrix[9][1]=-1;

        }
        
    }

}


function selection_9_2(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_2").style.backgroundColor=='red'){
                document.getElementById("grid_9_2").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_2").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=2;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_2").style.backgroundColor=='green'){
                document.getElementById("grid_9_2").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_2").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=2;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_2").style.backgroundColor=='black'){
            document.getElementById("grid_9_2").style.backgroundColor='aliceblue';
            grid_matrix[9][2]=0;
        }else{
            document.getElementById("grid_9_2").style.backgroundColor='black';
            grid_matrix[9][2]=-1;

        }
        
    }

}



function selection_9_3(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_3").style.backgroundColor=='red'){
                document.getElementById("grid_9_3").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_3").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=3;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_3").style.backgroundColor=='green'){
                document.getElementById("grid_9_3").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_3").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=3;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_3").style.backgroundColor=='black'){
            document.getElementById("grid_9_3").style.backgroundColor='aliceblue';
            grid_matrix[9][3]=0;
        }else{
            document.getElementById("grid_9_3").style.backgroundColor='black';
            grid_matrix[9][3]=-1;

        }
        
    }

}



function selection_9_4(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_4").style.backgroundColor=='red'){
                document.getElementById("grid_9_4").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_4").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=4;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_4").style.backgroundColor=='green'){
                document.getElementById("grid_9_4").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_4").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=4;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_4").style.backgroundColor=='black'){
            document.getElementById("grid_9_4").style.backgroundColor='aliceblue';
            grid_matrix[9][4]=0;
        }else{
            document.getElementById("grid_9_4").style.backgroundColor='black';
            grid_matrix[9][4]=-1;

        }
        
    }

}


function selection_9_5(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_5").style.backgroundColor=='red'){
                document.getElementById("grid_9_5").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_5").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=5;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_5").style.backgroundColor=='green'){
                document.getElementById("grid_9_5").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_5").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=5;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_5").style.backgroundColor=='black'){
            document.getElementById("grid_9_5").style.backgroundColor='aliceblue';
            grid_matrix[9][5]=0;
        }else{
            document.getElementById("grid_9_5").style.backgroundColor='black';
            grid_matrix[9][5]=-1;

        }
        
    }

}


function selection_9_6(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_6").style.backgroundColor=='red'){
                document.getElementById("grid_9_6").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_6").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=6;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_6").style.backgroundColor=='green'){
                document.getElementById("grid_9_6").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_6").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=6;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_6").style.backgroundColor=='black'){
            document.getElementById("grid_9_6").style.backgroundColor='aliceblue';
            grid_matrix[9][6]=0;
        }else{
            document.getElementById("grid_9_6").style.backgroundColor='black';
            grid_matrix[9][6]=-1;

        }
        
    }

}

function selection_9_7(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_7").style.backgroundColor=='red'){
                document.getElementById("grid_9_7").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_7").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=7;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_7").style.backgroundColor=='green'){
                document.getElementById("grid_9_7").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_7").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=7;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_7").style.backgroundColor=='black'){
            document.getElementById("grid_9_7").style.backgroundColor='aliceblue';
            grid_matrix[9][7]=0;
        }else{
            document.getElementById("grid_9_7").style.backgroundColor='black';
            grid_matrix[9][7]=-1;

        }
        
    }

}

function selection_9_8(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_8").style.backgroundColor=='red'){
                document.getElementById("grid_9_8").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_8").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=8;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_8").style.backgroundColor=='green'){
                document.getElementById("grid_9_8").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_8").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=8;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_8").style.backgroundColor=='black'){
            document.getElementById("grid_9_8").style.backgroundColor='aliceblue';
            grid_matrix[9][8]=0;
        }else{
            document.getElementById("grid_9_8").style.backgroundColor='black';
            grid_matrix[9][8]=-1;

        }
        
    }

}


function selection_9_9(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_9").style.backgroundColor=='red'){
                document.getElementById("grid_9_9").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_9").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=9;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_9").style.backgroundColor=='green'){
                document.getElementById("grid_9_9").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_9").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=9;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_9").style.backgroundColor=='black'){
            document.getElementById("grid_9_9").style.backgroundColor='aliceblue';
            grid_matrix[9][9]=0;
        }else{
            document.getElementById("grid_9_9").style.backgroundColor='black';
            grid_matrix[9][9]=-1;

        }
        
    }

}

function selection_9_10(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_10").style.backgroundColor=='red'){
                document.getElementById("grid_9_10").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_10").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=10;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_10").style.backgroundColor=='green'){
                document.getElementById("grid_9_10").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_10").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=10;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_10").style.backgroundColor=='black'){
            document.getElementById("grid_9_10").style.backgroundColor='aliceblue';
            grid_matrix[9][10]=0;
        }else{
            document.getElementById("grid_9_10").style.backgroundColor='black';
            grid_matrix[9][10]=-1;

        }
        
    }

}


function selection_9_11(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_11").style.backgroundColor=='red'){
                document.getElementById("grid_9_11").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_11").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=11;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_11").style.backgroundColor=='green'){
                document.getElementById("grid_9_11").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_11").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=11;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_11").style.backgroundColor=='black'){
            document.getElementById("grid_9_11").style.backgroundColor='aliceblue';
            grid_matrix[9][11]=0;
        }else{
            document.getElementById("grid_9_11").style.backgroundColor='black';
            grid_matrix[9][11]=-1;

        }
        
    }

}


function selection_9_12(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_12").style.backgroundColor=='red'){
                document.getElementById("grid_9_12").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_12").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=12;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_12").style.backgroundColor=='green'){
                document.getElementById("grid_9_12").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_12").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=12;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_12").style.backgroundColor=='black'){
            document.getElementById("grid_9_12").style.backgroundColor='aliceblue';
            grid_matrix[9][12]=0;
        }else{
            document.getElementById("grid_9_12").style.backgroundColor='black';
            grid_matrix[9][12]=-1;

        }
        
    }

}


function selection_9_13(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_13").style.backgroundColor=='red'){
                document.getElementById("grid_9_13").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_13").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=13;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_13").style.backgroundColor=='green'){
                document.getElementById("grid_9_13").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_13").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=13;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_13").style.backgroundColor=='black'){
            document.getElementById("grid_9_13").style.backgroundColor='aliceblue';
            grid_matrix[9][13]=0;
        }else{
            document.getElementById("grid_9_13").style.backgroundColor='black';
            grid_matrix[9][13]=-1;

        }
        
    }

}



function selection_9_14(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_14").style.backgroundColor=='red'){
                document.getElementById("grid_9_14").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_14").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=14;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_14").style.backgroundColor=='green'){
                document.getElementById("grid_9_14").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_14").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=14;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_14").style.backgroundColor=='black'){
            document.getElementById("grid_9_14").style.backgroundColor='aliceblue';
            grid_matrix[9][14]=0;
        }else{
            document.getElementById("grid_9_14").style.backgroundColor='black';
            grid_matrix[9][14]=-1;

        }
        
    }

}


function selection_9_15(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_15").style.backgroundColor=='red'){
                document.getElementById("grid_9_15").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_15").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=15;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_15").style.backgroundColor=='green'){
                document.getElementById("grid_9_15").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_15").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=15;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_15").style.backgroundColor=='black'){
            document.getElementById("grid_9_15").style.backgroundColor='aliceblue';
            grid_matrix[9][15]=0;
        }else{
            document.getElementById("grid_9_15").style.backgroundColor='black';
            grid_matrix[9][15]=-1;

        }
        
    }

}


function selection_9_16(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_16").style.backgroundColor=='red'){
                document.getElementById("grid_9_16").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_16").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=16;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_16").style.backgroundColor=='green'){
                document.getElementById("grid_9_16").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_16").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=16;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_16").style.backgroundColor=='black'){
            document.getElementById("grid_9_16").style.backgroundColor='aliceblue';
            grid_matrix[9][16]=0;
        }else{
            document.getElementById("grid_9_16").style.backgroundColor='black';
            grid_matrix[9][16]=-1;

        }
        
    }

}


function selection_9_17(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_17").style.backgroundColor=='red'){
                document.getElementById("grid_9_17").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_17").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=17;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_17").style.backgroundColor=='green'){
                document.getElementById("grid_9_17").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_17").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=17;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_17").style.backgroundColor=='black'){
            document.getElementById("grid_9_17").style.backgroundColor='aliceblue';
            grid_matrix[9][17]=0;
        }else{
            document.getElementById("grid_9_17").style.backgroundColor='black';
            grid_matrix[9][17]=-1;

        }
        
    }

}


function selection_9_18(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_18").style.backgroundColor=='red'){
                document.getElementById("grid_9_18").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_18").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=18;



        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_18").style.backgroundColor=='green'){
                document.getElementById("grid_9_18").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_18").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=18;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_18").style.backgroundColor=='black'){
            document.getElementById("grid_9_18").style.backgroundColor='aliceblue';
            grid_matrix[9][18]=0;
        }else{
            document.getElementById("grid_9_18").style.backgroundColor='black';
            grid_matrix[9][18]=-1;

        }
        
    }

}


function selection_9_19(){
    if (select_red){
        if(start_activate==1){
            if(document.getElementById("grid_9_19").style.backgroundColor=='red'){
                document.getElementById("grid_9_19").style.backgroundColor='aliceblue';
                start_activate=0;
                xstart=-2;
                ystart=-2;

            }

        }else{
            document.getElementById("grid_9_19").style.backgroundColor='red';
            start_activate=1;
            xstart=9;
            ystart=19;


        }

    }

    if (select_green){
        if(target_activate==1){
            if(document.getElementById("grid_9_19").style.backgroundColor=='green'){
                document.getElementById("grid_9_19").style.backgroundColor='aliceblue';
                target_activate=0;
                xtarget=-2;
                ytarget=-2;

            }

        }else{
            document.getElementById("grid_9_19").style.backgroundColor='green';
            target_activate=1;
            xtarget=9;
            ytarget=19;


        }

        
    }
    if (select_black){
        if(document.getElementById("grid_9_19").style.backgroundColor=='black'){
            document.getElementById("grid_9_19").style.backgroundColor='aliceblue';
            grid_matrix[9][19]=0;
        }else{
            document.getElementById("grid_9_19").style.backgroundColor='black';
            grid_matrix[9][19]=-1;

        }
        
    }

}


//.........................................................DFS..............................................................................

let ROW = 10;
let COL = 20;

// Initialize direction vectors
let dRow = [0, 1, 0, -1];
let dCol = [-1, 0, 1, 0];

        
let vis=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]


function isValidDFS(row, col){
    if (row < 0 || col < 0 || row >= ROW || col >= COL){
        return 0;
    }

    if (vis[row][col]==1)
        return 0;

    if (grid_matrix[row][col]<0)
        return 0;
        
    return 1;
}

function dfs(){
    if(xstart==-2 || xtarget==-2){
        alert("START Node and TARGET Node has not been selected")
    }else{

        
        
        let st=[];
        st.push([xstart, ystart]);

        const dfs_interval=setInterval(dfsf, 100)

        
        function dfsf(){
            
            let curr=st[st.length-1];
            st.pop(st[st.length-1]);
            let row=curr[0];
            let col=curr[1];

           
                
            if( isValidDFS(row, col)==1){
                vis[row][col]=1;

                string_grid='grid'+'_'+row+'_'+col;
                
                document.getElementById(string_grid).style.backgroundColor='aqua';
                document.getElementById(string_grid).style.transitionDuration='0.2s';
                document.getElementById(string_grid).style.transitionTimingFunction='ease-out';               

                if(row==xtarget && col==ytarget){
                    clearInterval(dfs_interval);
                }

                for(let i=0;i<=3;i++){
                    let adjx = row + dRow[i];
                    let adjy = col + dCol[i];
                    st.push([adjx, adjy]);

                }
            


            }
        }

        function stopdfs(){
            clearInterval(dfs_interval);
        }


    }
    

}



//.........................................................BFS..............................................................................


function bfs(){
    if(xstart==-2 || xtarget==-2){
        alert("START Node and TARGET Node has not been selected")
    }else{

        
        
        let st=[];
        st.push([xstart, ystart]);
        vis[xstart][ystart]=1;

        const bfs_interval=setInterval(bfsf, 100)

        
        function bfsf(){
            
            let curr=st[0];
            let row=curr[0];
            let col=curr[1];

            st.shift();

            string_grid='grid'+'_'+row+'_'+col;
                
            document.getElementById(string_grid).style.backgroundColor='aqua';
            document.getElementById(string_grid).style.transitionDuration='0.2s';
            document.getElementById(string_grid).style.transitionTimingFunction='ease-out'; 

            if(row==xtarget && col==ytarget){
                clearInterval(bfs_interval);
            }

           
                
            for(let i=0;i<=3;i++){
                let adjx = row + dRow[i];
                let adjy = col + dCol[i];
                if(isValidDFS(adjx, adjy)){
                    st.push([adjx, adjy]);
                    vis[adjx][adjy]=1;
                }

            }
        
        }

        function stopbfs(){
            clearInterval(bfs_interval);
        }


    }
    

}