import React, {useState} from "react";

// Задача2 Функиции Валидации 
function validateName(value) {
    if (!value) {
        return "Name is required";
    }   
    if (value.length < 2) {
        return "Name must be at least 2 characters";
    }   
    return "";
}

function validateEmail(value) {
    if (!value) {
        return "Email is required";
    }   
    const emailRegex = /^[^\w-.]+@([^\w-]+\.)+[^\w-]{2,4}$/;
    if (!emailRegex.test(value)) {
        return "Invalid email format";
    }   
    return "";
}

function validateAge (value) {
    if (!value) {
        return "Age is required";
    }
    const age = parseInt(value, 10);
    if (isNaN(age) || age < 18 || age > 100) {
        return "Age must be a number between 18 and 100";
    }
    return "";
}

function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [succes , setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameErr = validateName(name);
        const emailErr = validateEmail(email);
        const ageErr = validateAge(age);
        if (nameErr || emailErr || ageErr) retutn;
        setSuccess(true);
        setName('');
        setEmail('');
        setAge('');
    }
 
    return (
        <form onSubmit={handleSubmit}> {/*Задача 3 Обработчик отправки формы */}
        <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
                const value = e.target.value;
                setName(value);
                setNameError(validateName(value));
            }}
        />
        {nameError && <div style={{ color: "red" }}>{nameError}</div>}

        <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
                const value = e.target.value;
                setAge(value);
                setAgeError(validateAge(value));
            }}
        />
        {ageError && <div style={{ color: "red" }}>{ageError}</div>}

        <button type="submit">Submit</button>
        {succes && <div style={{ color: "green" }}>Form submitted successfully!</div>}
    </form>
    );
}
