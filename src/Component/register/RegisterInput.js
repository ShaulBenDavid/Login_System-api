

export const RegisterInput = [
    {
        id: 1,
        type: "text",
        name: "username",
        label: "User Name",
        pattern: "[A-Za-z0-9]{3,16}$",
        errMessage: "UserName must be 3-16 characters and shouldn't include any special character!",
        required: true,
    },
    {
        id: 2,
        type: "password",
        name: "password",
        label: "Password",
        pattern: "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
        errMessage: "password must contain at least 8 characters, at least 1 number and both lower and uppercase letters and special characters!",
        required: true,
    },
    {
        id: 3,
        type: "password",
        name: "password2",
        label: "Confirm Password",
        pattern: "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
        errMessage: "password doesn't match",
        required: true,
    },
    {
        id: 4,
        type: "email",
        name: "email",
        label: "Email",
        pattern: "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i",
        errMessage: "Email is required! exemple: xxx@xxx.xxx",
        required: true,
    },
    {
        id: 5,
        type: "text",
        name: "firstName",
        label: "First Name",
        pattern: "[A-Za-z0-9]{2,16}$",
        errMessage: "First Name is required!",
        required: true,
    },
    {
        id: 6,
        type: "text",
        name: "lastName",
        label: "Last Name",
        pattern: "[A-Za-z0-9]{2,16}$",
        errMessage: "Last Name is required!",
        required: true,
    },
];