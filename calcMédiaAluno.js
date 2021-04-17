        //1 criar variavel alunos
        //2 criar variavl notas e media
        //3 criar função que irá calcular a média
        //4 criar mensagem para exibir aluno e média
        //5 criar array para o aluno ter 4 notas
        //6 criar FOR para correr as notas 
        //7 criar mensagem informando as notas seguidas
        //8 criar uma array para adicionar +3 alunos
        //9 criar +3 arrays de notas para cada aluno ter 4 notas
        //10 exibir na tela : Aluno + n1+n2+n3+n4 + media
        //11 criar IF para informar se o aluno foi aprovado
        //12 exibir na tela aluno notas media e aprovado ou n 
        //13 criar função para criar novos alunos
        //14 criar alunos exclusivamente via função
        //15 exugar todo deixando mais simples
        // COMPLETO
        
        alunos = [];
        notas1 = [];
        notas2 = [];
        notas3 = [];
        notas4 = [];
        
        function calcMedia (n1,n2,n3,n4){
          media=(n1+n2+n3+n4)/4
          return media;
        }
        function addAluno (nome,n1,n2,n3,n4){
          alunos.push(nome);
          notas1.push(n1);
          notas2.push(n2);
          notas3.push(n3);
          notas4.push(n4);
        }
        
        addAluno("Fábio",8.5,10,6,7.5);
        addAluno();
        addAluno();

        for(i in alunos){
          
          medias = calcMedia(notas1[i],notas2[i],notas3[i],notas4[i]);

          if(medias >= 7){
            status="aprovado"
          }else{
            status="reprovado"
          }

          console.log(alunos[i]+" nota1= "+notas1[i]+" nota2= "+notas2[i]
          +" nota3= "+notas3[i]+" nota4= "+notas4[i]+" média= "+medias+" resultado= "+status)
        }