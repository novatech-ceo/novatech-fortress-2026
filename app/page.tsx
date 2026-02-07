<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌟 النظام الجفري المتكامل - الإصدار الذكي</title>
    <style>
        :root {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --secondary: #10b981;
            --danger: #ef4444;
            --warning: #f59e0b;
            --info: #3b82f6;
            
            --bg-darker: #0f172a;
            --bg-dark: #1e293b;
            --bg-card: #334155;
            --bg-hover: #475569;
            
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --text-muted: #94a3b8;
            
            --border: #475569;
            --border-light: #64748b;
            --radius: 12px;
            
            --success-bg: rgba(16, 185, 129, 0.1);
            --warning-bg: rgba(245, 158, 11, 0.1);
            --danger-bg: rgba(239, 68, 68, 0.1);
            --info-bg: rgba(59, 130, 246, 0.1);
            
            --transition: all 0.3s ease;
            --shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }
        
        body {
            background: var(--bg-darker);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        .header {
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border);
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .logo-icon {
            font-size: 2.5rem;
            color: var(--primary);
        }
        
        .logo-text h1 {
            font-size: 1.5rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        /* Navigation */
        .nav-tabs {
            display: flex;
            gap: 5px;
            background: var(--bg-card);
            padding: 5px;
            border-radius: 10px;
            border: 1px solid var(--border);
        }
        
        .nav-tab {
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            color: var(--text-secondary);
            font-weight: 500;
            transition: var(--transition);
        }
        
        .nav-tab:hover {
            background: var(--bg-hover);
            color: var(--text-primary);
        }
        
        .nav-tab.active {
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        /* Main Layout */
        .main-content {
            display: grid;
            grid-template-columns: 350px 1fr 400px;
            gap: 20px;
            padding: 20px 0;
            min-height: calc(100vh - 100px);
        }
        
        @media (max-width: 1200px) {
            .main-content {
                grid-template-columns: 1fr;
            }
        }
        
        /* Sidebar */
        .sidebar {
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 25px;
            border: 1px solid var(--border);
            height: fit-content;
        }
        
        .section-title {
            color: var(--primary);
            font-size: 1.1rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        /* Inputs */
        .input-group {
            margin-bottom: 20px;
        }
        
        .input-label {
            display: block;
            color: var(--text-secondary);
            margin-bottom: 8px;
            font-size: 0.95rem;
        }
        
        .input-field {
            width: 100%;
            background: var(--bg-dark);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px 15px;
            color: var(--text-primary);
            font-size: 1rem;
            transition: var(--transition);
        }
        
        .input-field:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(99, 102
