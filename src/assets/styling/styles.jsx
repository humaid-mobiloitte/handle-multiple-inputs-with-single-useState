const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '900px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      minHeight: '710px' 
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    formContainer: {
      padding: '30px',
      backgroundColor: '#fff',
    },
    title: {
      marginBottom: '20px',
      fontWeight: 600,
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
      fontSize:'14px'
    },
    signupText: {
      textAlign: 'center',
      marginBottom: '15px',
      color:'teal'
    },
    button: {
      padding: '10px',
      fontSize: '14px',
      borderRadius: '8px',
      backgroundColor:'teal'
    },
  };
  
  export default styles;
  