```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Use a more specific route if possible */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}
function Contact() {/* ... */}
function ContactDetails() {/* ... */}
```