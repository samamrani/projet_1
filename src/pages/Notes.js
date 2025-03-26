import React, { useState } from 'react';

function Notes() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');
    const [generatedReport, setGeneratedReport] = useState('');

    const handleAddNote = () => {
        if (note.trim()) {
            setNotes([...notes, note]);
            setNote('');
        }
    };

    const handleGenerateReport = () => {
        const reportContent = `
Compte rendu de réunion

Introduction :
Ce document résume les points discutés lors de la réunion.

Points discutés :
${notes.map((n, index) => `${index + 1}. ${n}`).join('\n')}

Conclusion :
Merci de consulter ce compte rendu pour toute clarification.
        `;
        setGeneratedReport(reportContent);
    };

    const handleDownloadReport = () => {
        const blob = new Blob([generatedReport], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'CompteRendu.txt';
        link.click();
    };

    return (
        <div>
            <h1>Compte rendu de réunion</h1>
            <div>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Saisissez vos notes ici..."
                />
                <button onClick={handleAddNote}>Ajouter</button>
            </div>
            <h2>Notes</h2>
            <ul>
                {notes.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
            {notes.length > 0 && (
                <>
                    <button onClick={handleGenerateReport}>Générer le compte rendu</button>
                    {generatedReport && (
                        <div>
                            <h2>Compte rendu généré</h2>
                            <pre>{generatedReport}</pre>
                            <button onClick={handleDownloadReport}>Télécharger le compte rendu</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Notes;
