<script>
	let isChecked = false;
  </script>
  
  <style>
	.upside-down {
	  transform: rotate(180deg);
	}
  </style>
  
  <form method="POST">
	<img class={isChecked ? 'upside-down' : ''} src="http://localhost:8080/stream" alt="Camera feed"/>
	<label>
	  Angle
	  <input name="number" type="number">
	</label>
	<label>
	  Upside down
	  <input type="checkbox" bind:checked={isChecked}>
	</label>
	<button>Move</button>
  </form>