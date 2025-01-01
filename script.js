document.getElementById("loanForm").addEventListener("submit", function (e) {
		  e.preventDefault(); // Mencegah form submit default
		  const name = document.getElementById("name").value.trim();
		  const bookTitle = document.getElementById("bookTitle").value.trim();
		  const borrowDate = document.getElementById("borrowDate").value;
		  const returnDate = document.getElementById("returnDate").value;
		  const alertMessage = document.getElementById("alertMessage");

		  if (name && bookTitle && borrowDate && returnDate) {
		    // Simpan data ke localStorage
		  	const loanData = JSON.parse(localStorage.getItem("loanData")) || [];
		  	loanData.push({ name, bookTitle, borrowDate, returnDate });
		  	localStorage.setItem("loanData", JSON.stringify(loanData));

		    // Menampilkan pesan sukses
		  	alertMessage.className = "alert alert-success";
		  	alertMessage.textContent = "Data berhasil disimpan!";
		  	alertMessage.classList.remove("d-none");

		    // Reset form
		  	this.reset();
		  } else {
		    // Menampilkan pesan gagal
		  	alertMessage.className = "alert alert-danger";
		  	alertMessage.textContent = "Harap lengkapi semua data!";
		  	alertMessage.classList.remove("d-none");
		  }
		});