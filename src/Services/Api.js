
const SERVER_URL = "https://abra-course-server.herokuapp.com/";
// Post Call
const apiCall = async (
    url,
    payload = undefined,
    method = "GET",
    accessToken = undefined
) => {
    
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        method: method,
        body: JSON.stringify(payload)
    });

    let data = undefined;

    if (method !== "DELETE") {
        data = await response.json();
        return { data, response };
    }

    if (method === "DELETE") {
        return response;
    }

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

// Register
export const addUserPost = async (name, accessToken) => {

    const payload = {
        name
    };

    const data = await apiCall(SERVER_URL + "items/", payload, "POST", accessToken);

    return data;
    
}

// Get Items
export const getPosts = async (accessToken) => {

    const data = await apiCall(SERVER_URL + "items/", undefined, "GET",accessToken);
    console.log(data);

    if (data.response.status === 200) {
        return data.data;
    }

}

// Delete Items
export const deleteUserItem = async (accessToken, id) => {

    const data = await apiCall(SERVER_URL + "items/" + id + "/", undefined, "DELETE",accessToken);

    return data;
    

}

// Rename Items
export const renameUserItem = async (accessToken, id, name) => {

    const payload = {
        name
    };

    const data = await apiCall(SERVER_URL + "items/" + id + "/", payload, "PATCH", accessToken);
    
    console.log(data);

    return data;
    

}