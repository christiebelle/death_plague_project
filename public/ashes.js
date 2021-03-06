var canvas = document.getElementById('splash-canvas');
  var context = canvas.getContext("2d");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  Ashes();

  function Ashes() {
    var ash, arr = [];
    var num = 100,
      tsc = 1,
      sp = 1;
    var sc = 1.3,
      t = 0,
      mv = 50,
      min = 1;
    for (var i = 0; i < num; ++i) {
      ash = new Flake();
      ash.y = Math.random() * (height + 50);
      ash.x = Math.random() * width;
      ash.t = Math.random() * (Math.PI * 2);
      ash.sz = (100 / (10 + (Math.random() * 100))) * sc;
      ash.sp = (Math.pow(ash.sz * .8, 1.5) * .15) * sp;
      ash.sp = ash.sp < min ? min : ash.sp;
      arr.push(ash);
    }
    go();

    function go() {
      window.requestAnimationFrame(go);
      context.clearRect(0, 0, width, height);
      // $.fillStyle = 'hsla(242, 95%, 3%, 1)';
      context.fillRect(0, 0, width, height);
      // $.fill();
      for (var i = 0; i < arr.length; ++i) {
        f = arr[i];
        f.t += .05;
        f.t = f.t >= Math.PI * 2 ? 0 : f.t;
        f.y += f.sp;
        f.x += Math.sin(f.t * tsc) * (f.sz * .2);
        if (f.y > height + 30) f.y = -5 - Math.random() * mv;
        if (f.x > width + mv) f.x = -mv;
        if (f.x < -mv) f.x = width + mv;
        f.draw();
      }
    }

    function Flake() {
      this.draw = function() {
        this.g = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
        this.g.addColorStop(0, 'hsla(40,15%,15%,1)');
        this.g.addColorStop(1, 'hsla(25,25%,25%,0)');
        context.moveTo(this.x, this.y);
        context.fillStyle = this.g;
        context.beginPath();
        context.arc(this.x, this.y, this.sz, 0, Math.PI * 4, true);
        context.fill();
      }
    }
  }

  window.addEventListener('resize', function() {
    canvas.width = w = window.innerWidth;
    canvas.height = h = window.innerHeight;
  }, false);
