export const close = (expanded, setExpanded) => {
    const handleClickOutside = (event) => {
        if (expanded) {
            const navbar = document.getElementById("navbar");
            if (navbar && !navbar.contains(event.target)) {
                setExpanded(false);
            }
        }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}

export const search = (event, username, navigate) => {
   event.preventDefault();
   if (username.trim().length !== 0) {
       navigate("u/search/" + username);
   }
}