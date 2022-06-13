
const SERVER_URL = "https://abra-course-server.herokuapp.com/";
// Post Call
const apiCall = async (url, payload, method = "GET") => {
    
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: method,
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    return { data, response };
}

// Get Call
const apiCallGet = async (url, accessToken, method = "GET") => {
    
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        method: method
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

// Get Items
export const getPosts = async (accessToken) => {

    const data = await apiCallGet(SERVER_URL + "items/", accessToken);
    console.log(data);

    if (data.response.status === 200) {
        return data.data;
    }

}