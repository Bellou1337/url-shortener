/**
 * @swagger
 * /api/shorten:
 *   post:
 *     summary: Сократить URL
 *     description: Создает короткую версию длинного URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *             properties:
 *               url:
 *                 type: string
 *                 description: Оригинальный URL для сокращения
 *     responses:
 *       200:
 *         description: Успешное создание короткой ссылки
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortId:
 *                   type: string
 *       400:
 *         description: Необходимо указать URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/redirect/{shortId}:
 *   get:
 *     summary: Редирект по короткой по короткому идентификатору
 *     description: Перенаправляет на оригинальный URL по короткому идентификатору
 *     parameters:
 *       - in: path
 *         name: shortId
 *         required: true
 *         schema:
 *           type: string
 *         description: Короткий идентификатор URL
 *     responses:
 *       301:
 *         description: Редирект на оригинальный URL
 *       404:
 *         description: shortId не найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
