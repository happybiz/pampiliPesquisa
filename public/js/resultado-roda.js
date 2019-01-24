(function($){

  function ResultadoChamamento( canvas, participante){
  
      this.canvas = canvas;
      
      this.canvas.width  = this.w   =   842;
      this.canvas.height = this.h   =   1191;
      this.canvas.style.background= 'white';
      this.ctx = canvas.getContext('2d');
  
      this.colorAlumiar = '#e257a6';
      this.participante = participante;
      this.logoChama = {
          w:2001 * 0.05,
          h:1441 * 0.05,
          img: document.getElementById('logo')
      };
      this.roda = {
          w:4000 * 0.18,
          h:4000 * 0.18,
          img: document.getElementById('roda')      
      }
  
      this.eixo = {
          w:2000 * 0.05,
          h:1800 * 0.05,
          img: document.getElementById('eixo')      
      }
  
      this.rosalina = {
          w:2001 * 0.1,
          h:1287 * 0.1,
          img: document.getElementById('rosalina')  
      }
      this.sombra = {
          w:267,
          h:29,
          img: document.getElementById('sombra') 
      }
  
  
  
  }
  
  ResultadoChamamento.prototype = {
      desenhar: function(){
          //this.desenharTopo(this.ctx);
          this.desenharRoda(this.ctx);        
          //.desenharRopdape(this.ctx);
      },
      desenharTopo: function(ctx){
          ctx.drawImage(this.logoChama.img, 
                              this.w / 2 - (this.logoChama.w / 2), this.h * 0.04, 
                              this.logoChama.w, this.logoChama.h);
      },
      desenharRoda:function(ctx){
          var RodaY = this.h * 0.15;
          var centerRodaX = this.w / 2 - (this.roda.w / 2);
          var centerRodaY = RodaY + (this.roda.h / 2)
          
          ctx.drawImage(this.sombra.img, 
              centerRodaX + ((this.roda.w /2) - (this.sombra.w / 2)), RodaY + (this.roda.h * 0.97), 
              this.sombra.w, this.sombra.h);
  
          var that  = this;
          this.participante.eixos.map(function(eixo, i){
              that.desenharEixos(that.ctx, centerRodaX  + (that.roda.w / 2), centerRodaY, (55 + 72 * i), eixo);
          })
          // desenhar a roda
          ctx.drawImage(this.roda.img, 
              centerRodaX, RodaY, 
              this.roda.w, this.roda.h);      
  
          // eixo
          ctx.drawImage(this.eixo.img, 
              this.w / 2 - (this.eixo.w / 2), centerRodaY - (this.eixo.h / 2), 
              this.eixo.w, this.eixo.h);
     
      },
      desenharRopdape(ctx){
  
          ctx.drawImage(this.rosalina.img, 
              this.w / 2 - (this.rosalina.w / 2), this.h * 0.80, 
              this.rosalina.w, this.rosalina.h);
  
          //titulo
          ctx.textAlign = "center";
          ctx.font = "bold 35px Flexo";
          ctx.fillStyle = this.colorAlumiar;
          ctx.fillText(":)BiZ", this.w/2, this.h * 0.95 );
  
      },
      desenharEixos(ctx, centerRodaX, centerRodaY, rotacao, eixo){
  
  
          // esta no centro?
          ctx.fillStyle = this.colorAlumiar;
          ctx.beginPath();
          ctx.arc(centerRodaX,centerRodaY,40,0,2*Math.PI);
          ctx.stroke();
          
          var rectH = 30;
          var rectW = (this.roda.w / 2) *.85;
  
          var para_graus = Math.PI / 180;
          var eixoRotacao = para_graus * rotacao;
  
          // salvar o contexto para a rotação no centro da roda
          ctx.save();
          ctx.translate(centerRodaX, centerRodaY);  
          ctx.rotate(eixoRotacao);
  
              
          
          ctx.fillStyle = "lightgray";
          ctx.lineWidth = 3;
          ctx.strokeStyle="lightgray";
          ctx.strokeRect(0, 0 - (rectH / 2), rectW, rectH);
  
          ctx.fillStyle = this.colorAlumiar;
          ctx.fillRect(0, 0 - (rectH / 2),  1 * ((rectW) * eixo.porc), rectH);
  
          // arrumo a visualização de alguns eixos
          if(rotacao > 126  && rotacao < 230 ){
              ctx.save();
              //ctx.scale(1, -1);
              ctx.translate(0 + (rectW * .2), 0 - (rectH / 2 + 5));  
              ctx.scale(-1, -1);
              ctx.font = "bold 24px Flexo";
              ctx.textAlign="end"; 
              ctx.fillText(eixo.designio, 0, 0 - (rectH + 10));
  
              
              ctx.fillStyle = "#727176";
              ctx.textAlign = "center";
              ctx.textAlign="end"; 
              ctx.fillText(eixo.destino, 0 - (rectW * .6), rectH -12)
              ctx.restore();
  
          }else{
              ctx.textAlign = "center";
              ctx.font = "bold 24px Flexo";
              ctx.textAlign="start"; 
              ctx.fillText(eixo.designio, 0 + (rectW * .2), 0 - (rectH / 2 + 5))
  
              ctx.fillStyle = "#727176";
              ctx.textAlign = "center";
              ctx.textAlign="end"; 
              ctx.fillText(eixo.destino, 0 + (rectW * .9), 0 + rectH + 10)
          }
          ctx.restore();
       
  
      }
  }
  
  // pdf
  function gerarPDF(){
      // os ids do charts da página
      function getCanvas(canvas){
          return canvas.toDataURL('image/png')
      }
      function imprimirPDF(){
        var pagesSize = {
          small: {
            width: 411, //14,5 cm
            height: 283 //10 cm
          },
          papelGrande: {
              width: 425, //15 cm
              height: 510 //18 cm
            }
        };
        var layout = {
          /**
             * Aqui vai as definições do documento como:
             * tamanho da página, default A4
             * orientação ex: landscape ou portrait
             * styles
             * pageMargins
           */
          pageMargins: [ 0, 0, 0, 0 ],
          pageSize: "A4",
          pageOrientation: 'portrait',
          "content": [],
  
        }
    
        layout.content.push({
          image: getCanvas(document.getElementById('canvas')),
          "fit": [ 510 * 2 , 425 * 2 ],
          margin: [ 0, 0, 0, 0 ]
        });
  
  
        pdfMake.createPdf(layout).download('grafico.pdf');
    
      }
  
      imprimirPDF();
    
    } 
  
      window.addEventListener('load', function(){
          var canvas = document.getElementById('canvas2');
          
          var participante = {
              obra:":BiZ",
              eixos: [
                  {
                      designio: 'SUJEITO',
                      destino: 'OBJETO',
                      porc: 0.7
  
                  },
                  {
                      designio: 'CHAMADO / CHAMA',
                      destino: '',
                      porc: 0.3
  
                  },
                  {
                      designio: 'OBA!',
                      destino: 'UFA!',
                      porc: 0.5
                  },
                  {
                      designio: 'CRIADOR',
                      destino: 'CRIATURA',
                      porc: 0.4
                  },
                  {
                      designio: 'FARTA',
                      destino: 'FALTA',
                      porc: 0.2
  
                  }
              ]
          }
          chamamento =  new ResultadoChamamento(canvas, participante);
          chamamento.desenhar();
      });
      var btnPDF = document.getElementById('gerarPdf');
      btnPDF.addEventListener('click', gerarPDF);
  })($)