const profile = document.getElementById('profile');
    /* ao conectar com o back, precisamos incluir aqui uma forma de 
        verificar se o usuário é uma aluno ou professor */
    let isTeacher = true;

    const matricula = document.getElementById('matricula');
    const tipo = document.getElementById('tipo');
    const titulo_tc = document.getElementById('titulo-tc');
    const status_tc = document.getElementById('status');
    const orientador = document.getElementById('orientador');
    const orientandos = document.getElementById('orientandos');
    const bancas = document.getElementById('bancas');
    const student_only = document.getElementById('student-only');

    function main() {
        document.getElementById('role_changing').innerText = isTeacher? "PROFESSOR" : "ALUNO";
    
      console.log(isTeacher)
      if (profile) {
        assign(isTeacher);
      }
    }

    function assign(isTeacher) {
      matricula.className = isTeacher ? "hidden" : "";
      titulo_tc.className = isTeacher ? "hidden" : "";
      status_tc.className = isTeacher ? "hidden" : "";
      orientador.className = isTeacher ? "hidden" : "";
      student_only.className = isTeacher ? "hidden" : "";

      tipo.className= isTeacher ? "" : "hidden";
      orientandos.className= isTeacher ? "" : "hidden"; 
      bancas.className = isTeacher ? "" : "hidden";
    }