from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        registration = {
            "Full Name": request.form.get("full_name", ""),
            "Age": request.form.get("age", ""),
            "Phone Number": request.form.get("phone", ""),
            "Email": request.form.get("email", ""),
            "Address": request.form.get("address", ""),
            "Emergency Contact Name": request.form.get("emergency_name", ""),
            "Emergency Contact Number": request.form.get("emergency_phone", ""),
        }

        print("\nNew GrandPal registration:")
        for field, value in registration.items():
            print(f"{field}: {value}")

        return render_template("register.html", submitted=True, full_name=registration["Full Name"])

    return render_template("register.html", submitted=False)


if __name__ == "__main__":
    app.run(debug=True)
