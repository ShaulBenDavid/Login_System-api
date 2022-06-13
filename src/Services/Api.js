
const SERVER_URL = "https://abra-course-server.herokuapp.com/";

const apiCall = async (url, payload, method = "GET") => {
    
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: method,
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    return { data, response };
}

// Login 
export const loginUser = async (username, password) => {
    const payload = {
        username,
        password
    };

    const data = await apiCall(SERVER_URL + "api/token/", payload, "POST");

    return data;

}


// Register
export const registerUser = async (username, password, email, firstName, lastName) => {

    const payload = {
        username: username,
        password: password,
        password2: password,
        email: email,
        first_name: firstName,
        last_name: lastName
    };

    const data = await apiCall(SERVER_URL + "register/", payload, "POST");

    return data;
    
}

console.log(1)

export const getPosts = async (accessToken) => {
    const response = await fetch("https://abra-course-server.herokuapp.com/items/", {
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
        },
        method: "GET"
    })
    
    if (response.status === 200){
        const data = await response.json();
        return data;
    }
}